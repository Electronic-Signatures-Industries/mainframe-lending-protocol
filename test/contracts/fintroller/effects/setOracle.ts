import { AddressZero } from "@ethersproject/constants";
import { expect } from "chai";

import { AddressOne } from "../../../../dev-utils/constants";
import { Errors, FintrollerErrors } from "../../../../dev-utils/errors";

export default function shouldBehaveLikeSetOracle(): void {
  const newOracle: string = AddressOne;

  describe("when the caller is the admin", function () {
    describe("when oracle address is not the zero address", function () {
      it("sets the new value", async function () {
        /* TODO: replace this with a proper oracle address */
        await this.fintroller.connect(this.admin).setOracle(newOracle);
      });

      it("emits a NewOracle event", async function () {
        /* The first argument is the zero address because initially there's no oracle */
        await expect(this.fintroller.connect(this.admin).setOracle(newOracle))
          .to.emit(this.fintroller, "NewOracle")
          .withArgs(AddressZero, newOracle);
      });
    });

    describe("when the oracle address is the zero address", function () {
      it("reverts", async function () {
        await expect(this.fintroller.connect(this.admin).setOracle(AddressZero)).to.be.revertedWith(
          FintrollerErrors.SetOracleZeroAddress,
        );
      });
    });
  });

  describe("when the caller is not the admin", function () {
    it("reverts", async function () {
      await expect(this.fintroller.connect(this.eve).setOracle(AddressZero)).to.be.revertedWith(Errors.NotAuthorized);
    });
  });
}