const chai = require("chai");
const assert = chai.assert;

const hasDuplicates = (_) => _.length != [...new Set(_)].length

const isSolution = function(n, queens) {
    if (queens.length != n) {
        return false;
    }
    if (hasDuplicates(queens)) {
        return false;
    }
    let diag_1 = [],
        diag_2 = [];
    for (let row = 0; row < queens.length; row++) {
        const col = queens[row];
        diag_1.push(col + row);
        diag_2.push(col - row);
    }
    if (hasDuplicates(diag_1) || hasDuplicates(diag_2)) {
        return false;
    }

    return true;
}

const solutions = [
    [ 0 ],
    [ 1, 3, 0, 2 ],
    [ 1, 3, 5, 7, 2, 0, 6, 4 ]
];

const not_solutions = [
    [ 1, 0, 3, 2 ],
    [ 1, 3, 0, 3 ],
    [ 1, 3, 5, 7, 0, 2, 4, 6 ]
];

describe("isSolution", () => {

    for (const solution of solutions) {
        it(`solution: ${solution}`, function() {
            assert.strictEqual(isSolution(solution.length, solution), true);
        });
    }

    for (const not_solution of not_solutions) {
        it(`not solution: ${not_solution}`, function() {
            assert.strictEqual(isSolution(not_solution.length, not_solution), false);
        });
    }

});

describe("nQueen", () => {

    it("N=1", () => assert.deepEqual(nQueen(1), [0]));
    it("N=2", () => assert.deepEqual(nQueen(2), [ ]));
    it("N=3", () => assert.deepEqual(nQueen(3), [ ]));

    for (let n = 4; n <= 10; n++) {
        it(`N=${n}`, () => assert.strictEqual(isSolution(n, nQueen(n)), true));
    }

});
