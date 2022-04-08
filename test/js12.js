import { expect } from "chai";
import Wizard from "../lib/js12";

function log(message) {
  console.log(message);
}

describe("Wizard Class", function () {
  it("it should be printed as an example", function () {
    const x = new Wizard(545, 210, 10);

    expect(x.health, x.mana, x.armor).to.eql(545, 210, 10);
  });

  it("it should be printed as console `파이어 볼`", function () {
    const x = new Wizard(545, 210, 10);

    expect(x.attack()).to.eql("파이어 볼");
  });
});
