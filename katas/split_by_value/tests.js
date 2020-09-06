const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 5, [], [] ],
    [ 5, [1, 3], [1, 3] ],
    [ -5, [1, 3], [1, 3] ],
    [ 5, [1, 3, 5, 7, 6, 4, 2], [1, 3, 4, 2, 5, 7, 6] ],
    [ 0, [5, 2, 7, 3, 2],[5, 2, 7, 3, 2] ],
    [ 6, [6, 4, 10, 10, 6],[4, 6, 10, 10, 6] ],
];

describe("Tests", function() {

    for (const [k, elements, expected] of tests) {
        it(`input: ${k}, ${elements}`, function() {
            assert.deepEqual(splitByValue(k, elements), expected);
        });
    }

});
