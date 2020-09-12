const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [ {a:1}, {a:2} ], 'a', [1, 2] ],
    [ [ {a:1,b:3}, {a:2} ], 'a', [1, 2] ],
];

describe("Tests", function() {

    for (const [objs, prop, expected] of tests) {
        it(`input: ${objs} ${prop}`, function() {
            assert.deepEqual(pluck(objs, prop), expected);
        });
    }

});
