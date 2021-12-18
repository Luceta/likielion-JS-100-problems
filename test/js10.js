import { expect } from "chai";
import printTree from "../lib/js10";

describe("printTree", function () {
  it("should be print tree when input is 5", function () {
    expect(printTree(5)).to.eql(
      "    *\n   ***\n  *****\n *******\n*********\n"
    );
  });
});
