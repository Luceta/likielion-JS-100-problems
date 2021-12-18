import { expect } from "chai";
import typeOfValue from "../lib/js03";

describe("spliceMethod", function () {
  it("should be 4", function () {
    expect(typeOfValue([100, 200, 300])).to.eql("4");
  });
});
