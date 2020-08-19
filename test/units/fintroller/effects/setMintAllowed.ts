import { expect } from "chai";

import { Errors, FintrollerErrors } from "../../../helpers/errors";

export default function shouldBehaveLikeSetMintAllowed(): void {
  describe("when the caller is the admin", function () {
    describe("when the bond is listed", function () {
      beforeEach(async function () {
        await this.fintroller.connect(this.admin).listBond(this.yToken.address);
      });

      it("sets the value of the property to true", async function () {
        await this.fintroller.connect(this.admin).setMintAllowed(this.yToken.address, true);
        const newState: boolean = await this.fintroller.mintAllowed(this.yToken.address);
        expect(newState).to.equal(true);
      });

      it("sets the value of the property to false", async function () {
        await this.fintroller.connect(this.admin).setMintAllowed(this.yToken.address, false);
        const newState: boolean = await this.fintroller.mintAllowed(this.yToken.address);
        expect(newState).to.equal(false);
      });

      it("emits a SetMintAllowed event", async function () {
        await expect(this.fintroller.connect(this.admin).setMintAllowed(this.yToken.address, true))
          .to.emit(this.fintroller, "SetMintAllowed")
          .withArgs(this.yToken.address, true);
      });
    });

    describe("when the bond is not listed", function () {
      it("rejects", async function () {
        await expect(this.fintroller.connect(this.admin).setMintAllowed(this.yToken.address, true)).to.be.revertedWith(
          FintrollerErrors.BondNotListed,
        );
      });
    });
  });

  describe("when the caller is not the admin", function () {
    it("reverts", async function () {
      await expect(this.fintroller.connect(this.eve).setMintAllowed(this.yToken.address, true)).to.be.revertedWith(
        Errors.NotAuthorized,
      );
    });
  });
}