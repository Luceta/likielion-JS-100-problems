import { expect } from "chai";
import threedivisor from "../lib/js14";


describe("threedivisor", function () {
  it("if three divisor, result should be `짝`", function () {
    expect(threedivisor(3)).to.eql("짝");
  });

  it("if number is not three divisor, result should be n", function () {
    expect(threedivisor(5)).to.eql(5);
  });
});

