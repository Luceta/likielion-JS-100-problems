import { expect } from "chai";
import printDayAndTime from "../lib/js09";

describe("printDayAndTime", function () {
  it("should be print 2019/04/26 11:34:27", function () {
    expect(printDayAndTime()).to.eql("2019/04/26 11:34:27");
  });
});
