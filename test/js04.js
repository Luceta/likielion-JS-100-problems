import { expect } from "chai";
import typeOfValue2 from "../lib/js04";

describe("typeOfValue2", function () {
  it("should be 2", function () {
    expect(typeOfValue2()).to.eql("2");
  });
});
