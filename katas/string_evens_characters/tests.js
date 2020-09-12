const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ "a", "invalid string" ],
    [ "abcdefghijklm", [ "b", "d", "f", "h", "j", "l" ] ],
];

describe("Tests", function() {

    for (const [str, expected] of tests) {
        it(`input: ${str}`, function() {
            assert.deepEqual(evenChars(str), expected);
        });
    }

});
