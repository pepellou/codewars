const chai = require("chai");
const assert = chai.assert;

const randomString = function(){
    var i = Math.floor(Math.random() * 100) + 1, str="";
    while(i --> 0){
        str = str + "01234567890".charAt(Math.floor(Math.random()*10));
    }
    return str;
};

const tests = [
    [ "4", "1", 4 ],
    [ "4", "2", 6 ],
    [ "9", "7", 9 ],
    [ "10","10000000000", 0 ],
    [ "1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376", 6 ],
    [ "3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651", 7 ],
];

describe("Tests", function() {

    for (const [a, b, expected] of tests) {
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(lastDigit(a, b), expected);
        });
    }

    for(i = 0; i < 100; i++){
        const a = randomString();
        const b = 0;
        it(`input: ${a}, ${b}`, function() {
            assert.strictEqual(lastDigit(a, b), 1);
        });
    }

});
