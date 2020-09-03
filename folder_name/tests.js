const chai = require("chai");
const assert = chai.assert;

const tests = [
  [ 0,   1,    0],
  [16,   2,   32],
  [70,  -1,  -70],
  [26, -26, -676],
];

describe("Tests", function() {
  for (const [a, b, expected] of tests) {
    it(`input: ${a}, ${b}`, function() {
      assert.strictEqual(multiply(a, b), expected);
    });
  }
});
