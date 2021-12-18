import { expect } from "chai";
import truthyFalsy from "../lib/js06";

describe("truthyFalsy", function () {
  it("truthy is 2", function () {
    expect(truthyFalsy()).to.eql("2");
  });
});
