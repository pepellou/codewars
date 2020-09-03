const chai = require("chai");
const assert = chai.assert;

const tests = [
  [0,  "sıfır"],
  [16, "on altı"],
  [70, "yetmiş"],
  [26, "yirmi altı"],
  [99, "doksan dokuz"],
];

describe("Tests", function() {
    for (const [input, output] of tests) {
        it(`input: ${JSON.stringify(input)}`, function() {
            assert.strictEqual(getTurkishNumber(input), output);
        });
    }
});
