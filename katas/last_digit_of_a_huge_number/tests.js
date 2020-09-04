const chai = require("chai");
const assert = chai.assert;

const randomString = function(){
    var i = Math.floor(Math.random() * 100) + 1, str="";
    while(i --> 0){
        str = str + "01234567890".charAt(Math.floor(Math.random()*10));
    }
    return str;
};

const tests_simple = [
    [ 4, 1, 4 ],
    [ 4, 2, 6 ],
    [ 9, 7, 9 ],
    [ 10, 1000000000, 0 ],
];

describe("lastDigitSimple", function() {

    for (const [a, b, expected] of tests_simple) {
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(lastDigitSimple(a, b), expected);
        });
    }

    for(i = 0; i < 100; i++){
        const a = randomString();
        const b = 0;
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(lastDigitSimple(a, b), 1);
        });
    }

});

const tests_reminder_4 = [
    [ 0, 1, 0 ],
    [ 0, 0, 1 ],
    [ 2, 1, 2 ],
    [ 2, 3, 0 ],
    [ 4, 1, 0 ],
    [ 4, 2, 0 ],
    [ 7, 7, 3 ],
    [ 9, 7, 1 ],
    [ 5, 1234, 1 ],
    [ 3, 1234, 1 ],
    [ 3, 1235, 3 ],
    [ 10, 1000000000, 0 ],
];

describe("reminder_4_of_pow", function() {

    for (const [base, exp, expected] of tests_reminder_4) {
        it(`input: ${base}, ${exp}`, function() {
            assert.strictEqual(reminder_4_of_pow(base, exp), expected);
        });
    }

});

const tests = [
    [ [], 1 ],
    [ [0], 0 ],
    [ [4], 4 ],
    [ [0,0], 1 ],
    [ [0,0,0], 0 ],
    [ [0,0,0,0], 1 ],
    [ [0,0,0,0,0], 0 ],
    [ [5,0,0,0,4,0,0], 1 ],
    [ [5,0,0,4,0,0], 5 ],
    //[ [1,2], 1 ],
    //[ [3,4,5], 1 ],
    //[ [4,3,6], 4 ],
    //[ [7,6,21], 1 ],
    //[ [12,30,21], 6 ],
    //[ [937640,767456,981242], 0 ],
    //[ [123232,694022,140249], 6 ],
    //[ [499942,898102,846073], 6 ],
];

describe("lastDigit", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.strictEqual(lastDigit(input), expected);
        });
    }

    /*
    for (let i = 0; i < 10; i++) {
        const r1 = Math.floor(Math.random() * 100);
        const r2 = Math.floor(Math.random() * 10);
        it(`input: [${r1}]`, function() {
            assert.strictEqual(lastDigit([r1]), r1 % 10);
        });
        it(`input: [${r1}, ${r2}]`, function() {
            assert.strictEqual(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);
        });
    }
*/
});
