const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ "", 0 ],
    [ "abcde", 0 ],
    [ "aabbcde", 2 ],
    [ "aabBcde", 2 ],
    [ "Indivisibility", 1 ],
    [ "Indivisibilities", 2 ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(duplicateCount(input), expected);
        });
    }
});
