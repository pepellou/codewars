const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ 'zero', 0 ],
    [ 'one', 1 ],
    [ 'two', 2 ],
    [ 'three', 3 ],
    [ 'four', 4 ],
    [ 'five', 5 ],
    [ 'six', 6 ],
    [ 'seven', 7 ],
    [ 'eight', 8 ],
    [ 'nine', 9 ],
    [ 'ten', 10 ],
    [ 'eleven', 11 ],
    [ 'twelve', 12 ],
    [ 'thirteen', 13 ],
    [ 'fourteen', 14 ],
    [ 'fifteen', 15 ],
    [ 'sixteen', 16 ],
    [ 'seventeen', 17 ],
    [ 'eighteen', 18 ],
    [ 'nineteen', 19 ],
    [ 'twenty', 20 ],
    [ 'twenty-one', 21 ],
    [ 'twenty-two', 22 ],
    [ 'sixty-three', 63 ],
    [ 'eighty-four', 84 ],
    [ 'one hundred', 100 ],
    [ 'one hundred one', 101 ],
    [ 'one hundred twenty-four', 124 ],
    [ 'one hundred and twenty-four', 124 ],
    [ 'two hundred forty-six', 246 ],
    [ 'two thousand', 2000 ],
    [ 'thirty-five thousand', 35000 ],
    [ 'two hundred thousand three', 200003 ],
    [ 'two hundred three thousand', 203000 ],
    [ 'five hundred thousand three', 500003 ],
    [ 'five hundred thousand three hundred', 500300 ],
    [ 'seven hundred thousand', 700000 ],
    [ 'nine hundred one thousand two hundred and forty', 901240 ],
    [ 'one million', 1000000 ],
];

describe("Tests", function() {
    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(parseInt(input), expected);
        });
    }
});
