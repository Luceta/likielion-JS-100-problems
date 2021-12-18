import { expect } from "chai";
import objectDuplicatedKey from "../lib/js08";

describe("objectDuplicatedKey", function () {
  it("should be right weight Kg number", function () {
    expect(objectDuplicatedKey()).to.eql(84);
  });
});
