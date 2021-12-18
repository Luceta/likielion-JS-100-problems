import { expect } from "chai";
import deleteNumFromArray from "../lib/js01";

describe("deleteNumFromArray", function () {
  it("number of arrays should be three", function () {
    expect(deleteNumFromArray([100, 200, 300, 400, 500])).to.eql([
      100, 200, 300,
    ]);
  });
});
