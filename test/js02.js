import { expect } from "chai";
import spliceMethod from "../lib/js02";

describe("spliceMethod", function () {
  it("should be add 10000 after 100 index", function () {
    expect(spliceMethod([200, 100, 300])).to.eql([200, 100, 10000, 300]);
  });
});
