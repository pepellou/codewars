const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [], [] ],
    [ ["a", "b", "c"], ["1: a", "2: b", "3: c"] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(number(input), expected);
        });
    }

});
