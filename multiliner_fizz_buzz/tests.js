const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 3, 'fizz' ],
    [ 5, 'buzz' ],
    [ 15, 'fizzbuzz' ],
    [ 8, 8 ],
    [ 28, 28 ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(f(input), expected);
        });
    }
});
