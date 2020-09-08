const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ ["aa","eee","oo","iiii"], ["iiii","eee","aa","oo"] ],
    [ ["a","e","ii","ooo","u"], ["ooo","ii","a","e","u"] ],
    [ ["ioue","ee","uoiea"], ["uoiea", "ioue","ee"] ],
    [ ["high","day","boot"], ["boot","high","day"] ],
    [ ["none","uuu","Yuuuge!!"], ["uuu","Yuuuge!!","none"] ],
    [ ["AIBRH","","YOUNG","GREEEN"], ["GREEEN","AIBRH","YOUNG",""] ],
    [ ["jyn","joan","jimmy","joey"], ["joan","joey","jimmy","jyn"] ],
    [ ["uijijeoj","lkjlkjww2","iiutrqy"], ["iiutrqy","uijijeoj","lkjlkjww2"] ],
    [ ["how about now","a beautiful trio of"], ["a beautiful trio of","how about now"] ],
    [ ["every","bataux","is","waaaay","loose"], ["waaaay","bataux","loose","every","is"] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(sortStringsByVowels(input), expected);
        });
    }

});
