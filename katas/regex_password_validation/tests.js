const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 'djI38D55', true ],
    [ 'a2.d412', false ],
    [ 'JHD5FJ53', false ],
    [ '!fdjn345', false ],
    [ 'jfkdfj3j', false ],
    [ '123', false ],
    [ 'abc', false ],
    [ 'Password123', true ],
    [ 'fjd3IR9.;', false ],
    [ 'fjd3  IR9', false ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(validate(input), expected);
        });
    }
});
