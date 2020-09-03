const chai = require("chai");
const assert = chai.assert;

const tests = [
    [   0,   0 ],
    [   1,   1 ],
    [   5,   5 ],
    [  11,  22 ],
    [ 100, 103 ],
    [ 500, 476 ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(findNum(input), expected);
        });
    }
});
