import { expect } from "chai";
import sumOneToHundred from "../lib/js11";

describe("sumOneToHundred", function () {
  it("should be 5050", function () {
    expect(sumOneToHundred()).to.eql(5050);
  });
});
