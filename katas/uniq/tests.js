const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [], [] ],
    [ ['x', 'y'], ['x', 'y'] ],
    [ ['y', 'x', 'y'], ['y', 'x', 'y'] ],
    [ ['y', 'y', 'x'], ['y', 'x'] ],
    [ ['y', 'y', 'y'], ['y'] ],
    [ ['a','a','b','b','c','a','b','c','c'], ['a','b','c','a','b','c'] ],
    [ ['a','a','b','b','c','a','b','c','c'].sort(), ['a', 'b', 'c'] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(uniq(input), expected);
        });
    }

});
