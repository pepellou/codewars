const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1,   "321" ],
    [ 10,  "121110" ],
    [ 100, "102101100" ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(countDown(input), expected);
        });
    }
});
