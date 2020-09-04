const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ ['mov a 5','inc a','dec a','dec a','jnz a -1', 'inc a'], {'a': 1} ],
    [ ['mov a -10','mov b a','inc a','dec b','jnz a -2'], {'a': 0, 'b': -20} ],
];

describe("Tests", function() {
    for (const [program, expected] of tests) {
        it(`program: ${program}`, function() {
            assert.deepEqual(simple_assembler(program), expected);
        });
    }
});
