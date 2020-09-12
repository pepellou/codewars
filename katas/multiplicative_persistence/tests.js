const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 1, [] ],
    [ 10, [0] ],
    [ 69, [54, 20, 0] ],
    [ 277777788888899, [4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0] ],
];

describe("Tests", function() {

    for (const [n, expected] of tests) {
        it(`input: ${n}`, function() {
            assert.deepEqual(per(n), expected);
        });
    }

});
