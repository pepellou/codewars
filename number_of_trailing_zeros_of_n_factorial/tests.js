const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1, 0 ],
    [ 4, 0 ],
    [ 5, 1 ],
    [ 6, 1 ],
    [ 9, 1 ],
    [ 10, 2 ],
    [ 12, 2 ],
    [ 14, 2 ],
    [ 15, 3 ],
    [ 19, 3 ],
    [ 20, 4 ],
    [ 24, 4 ],
    [ 25, 6 ],
    [ 99, 22 ],
    [ 100, 24 ],
    [ 130, 32 ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(zeros(input), expected);
        });
    }
});
