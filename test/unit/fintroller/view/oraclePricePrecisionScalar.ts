import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";

import { fintrollerConstants } from "../../../../helpers/constants";

export default function shouldBehaveLikeOraclePrecisionScalarGetter(): void {
  it("retrieves the oracle precision scalar", async function () {
    const oraclePricePrecisionScalar: BigNumber = await this.contracts.fintroller.oraclePricePrecisionScalar();
    expect(oraclePricePrecisionScalar).to.equal(fintrollerConstants.oraclePrecisionScalar);
  });
}
