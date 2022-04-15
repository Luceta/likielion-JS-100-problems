import { expect } from "chai";
import bubble from "../lib/js50";

describe("bubble sort", function () {
  it("[5,4,3,2,1] should be [1,2,3,4,5]", function () {
    expect(bubble([5, 4, 3, 2, 1])).to.eql([1, 2, 3, 4, 5]);
  });
});
