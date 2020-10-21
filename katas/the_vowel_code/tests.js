const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 'hello', 'h2ll4' ],
    [ 'How are you today?', 'H4w 1r2 y45 t4d1y?' ],
    [ 'This is an encoding test.', 'Th3s 3s 1n 2nc4d3ng t2st.' ],
];

describe("encode()", function() {

    for (const [input, expected] of tests) {
        it(`encode: ${input} -> ${expected}`, function() {
            assert.strictEqual(encode(input), expected);
        });
    }

});

describe("decode()", function() {

    for (const [expected, input] of tests) {
        it(`encode: ${input} -> ${expected}`, function() {
            assert.strictEqual(decode(input), expected);
        });
    }

});
