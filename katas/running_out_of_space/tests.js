const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ ['kevin', 'has','no','space'], [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace'] ],
    [ ['kevin ', 'has',' no','space'], [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace'] ],
    [ ['this','cheese','has','no','holes'], ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes'] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(spacey(input), expected);
        });
    }

});
