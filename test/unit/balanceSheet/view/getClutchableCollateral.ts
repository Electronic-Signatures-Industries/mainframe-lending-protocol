import { BigNumber } from "@ethersproject/bignumber";
import { Zero } from "@ethersproject/constants";
import { expect } from "chai";

import { BalanceSheetErrors } from "../../../../helpers/errors";
import { percentages, precisionScalars, tokenAmounts } from "../../../../helpers/constants";

export default function shouldBehaveLikeGetClutchableCollateral(): void {
  /* 0.5 = 50 (repay amount) * 1.1 (liquidation incentive) * 1.0 (underlying price) / 100 (collateral price) */
  const clutchableCollateralAmount: BigNumber = tokenAmounts.pointFiftyFive;
  const repayAmount: BigNumber = tokenAmounts.fifty;

  describe("when the amount to repay is zero", function () {
    it("reverts", async function () {
      await expect(
        this.contracts.balanceSheet.getClutchableCollateral(this.stubs.fyToken.address, Zero),
      ).to.be.revertedWith(BalanceSheetErrors.GetClutchableCollateralZero);
    });
  });

  describe("when the amount to repay is not zero", function () {
    beforeEach(async function () {
      await this.stubs.fintroller.mock.liquidationIncentiveMantissa.returns(percentages.oneHundredAndTen);
    });

    describe("when the liquidation incentive is zero", function () {
      beforeEach(async function () {
        await this.stubs.fintroller.mock.liquidationIncentiveMantissa.returns(Zero);
      });

      it("retrieves zero", async function () {
        const clutchableCollateralAmount: BigNumber = await this.contracts.balanceSheet.getClutchableCollateral(
          this.stubs.fyToken.address,
          repayAmount,
        );
        expect(clutchableCollateralAmount).to.equal(Zero);
      });
    });

    describe("when the liquidation incentive is not zero", function () {
      describe("when the collateral has 18 decimals", function () {
        it("retrieves the clutchable collateral amount", async function () {
          const contractClutchableCollateralAmount: BigNumber = await this.contracts.balanceSheet.getClutchableCollateral(
            this.stubs.fyToken.address,
            repayAmount,
          );
          expect(contractClutchableCollateralAmount).to.equal(clutchableCollateralAmount);
        });
      });

      describe("when the collateral has 8 decimals", function () {
        beforeEach(async function () {
          await this.stubs.collateral.mock.decimals.returns(BigNumber.from(8));
          await this.stubs.fyToken.mock.collateralPrecisionScalar.returns(precisionScalars.tokenWithEightDecimals);
        });

        it("retrieves the downscaled clutchable collateral amount", async function () {
          const downscaledClutchableCollateralAmount = clutchableCollateralAmount.div(
            precisionScalars.tokenWithEightDecimals,
          );

          const contractClutchableCollateralAmount: BigNumber = await this.contracts.balanceSheet.getClutchableCollateral(
            this.stubs.fyToken.address,
            repayAmount,
          );
          expect(contractClutchableCollateralAmount).to.equal(downscaledClutchableCollateralAmount);
        });
      });
    });
  });
}
