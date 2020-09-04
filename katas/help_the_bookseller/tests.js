const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"], "(A : 200) - (B : 1140)" ],
    [ ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"], "(A : 0) - (B : 114) - (C : 70) - (W : 0)" ],
    [ [], ["B", "R", "D", "X"], "" ],
];

describe("Tests", function() {
    for (const [books, categories, expected] of tests) {
        it(`input: ${books}, ${categories}`, function() {
            assert.strictEqual(stockList(books, categories), expected);
        });
    }
});
