import { expect } from "chai";
import forCalculation from "../lib/js05";

describe("forCalculation", function () {
  it("should be 4 iterate two times", function () {
    expect(forCalculation()).to.eql("4");
  });
});
