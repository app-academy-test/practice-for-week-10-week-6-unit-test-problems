const assert = require("assert");
const dynamicDivider = require("../problems/03-dynamic-divider.js");

describe("dynamicDivider()", function() {
  it("should return a function", function() {
    assert.equal(dynamicDivider(3) instanceof Function, true)
  });

  it("should divide numbers", function() {
    const halfsies = dynamicDivider(2);
    assert.equal(halfsies(10), 5);
    assert.equal(halfsies(20), 10);
  });
});
