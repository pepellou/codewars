const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [ "codewars", "abc", "xyz" ], [88, 12, 225] ],
    [ [ "abc abc", "abc abc", "abc", "abc" ], [12, 24, 18, 24] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(wordValue(input), expected);
        });
    }

});
