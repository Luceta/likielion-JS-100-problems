import { expect } from "chai";
import declarationValue from "../lib/js07";

describe("declarationValue", function () {
  it("should be chose two answers", function () {
    expect(declarationValue()).to.eql("3 and 5");
  });
});
