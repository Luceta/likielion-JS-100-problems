import { expect,assert } from "chai";
import SpaceName from "../lib/js13";

describe("Space Name", function () {
  it("it printed earth", function () {
    expect(SpaceName(3)).to.eql("지구");
  });

  it("it printed error when index is over", function () {
    expect(SpaceName(9)).to.eql(undefined);
  });

  it("it printed error when index is over", function () {
    assert.doesNotThrow(() => collection.push(4), TypeError);
  });
});
