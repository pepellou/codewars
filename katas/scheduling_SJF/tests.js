const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ [100], 0, 100 ],
    [ [3,10,20,1,2], 0, 6 ],
    [ [3,10,20,1,2], 1, 16 ],
];

describe("Tests", function() {
    for (const [jobs, index, expected] of tests) {
        it(`input: ${jobs}, ${index}`, function() {
            assert.strictEqual(SJF(jobs, index), expected);
        });
    }
});
