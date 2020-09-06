const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ '', "" ],
    [ '#', "" ],
    [ '##', "" ],
    [ 'abcdc', "abcdc" ],
    [ 'ab#cdc', "acdc" ],
    [ 'abc#d##c', "ac" ],
    [ 'abc####d##c#', ""  ],
];

describe("Tests", function() {

    for (const [s, expected] of tests) {
        it(`input: ${s}`, function() {
            assert.strictEqual(cleanString(s), expected);
        });
    }

});
