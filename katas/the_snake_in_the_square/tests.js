const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe('The function "distribution"', function(){

    const CONFIG = [
        [1,  [[1]] ],
        [2,  [[1, 0], [1, 0]] ],
        [3,  [[1, 0], [1, 1]] ],
        [4,  [[1, 0, 0], [1, 0, 0], [1, 1, 0]] ],
        [5,  [[1, 0, 0], [1, 0, 0], [1, 1, 1]] ],
        [6,  [[1, 0, 0], [1, 0, 1], [1, 1, 1]] ],
        [7,  [[1, 0, 1], [1, 0, 1], [1, 1, 1]] ],
        [8,  [[1, 0, 0, 0], [1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0]] ],
        [31, [[1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 0, 1, 1, 1]] ],
    ];

    for(let [n,exp] of CONFIG) {
        it(`n=${n}`, function(){
            assert.deepEqual(distribution(n), exp);
        });
    }

});

