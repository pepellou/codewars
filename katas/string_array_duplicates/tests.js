const chai = require("chai");
const assert = chai.assert;

const tests = [
    [ ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"],['codewars','picaniny','hubububo'] ],
    [ ["abracadabra","allottee","assessee"],['abracadabra','alote','asese'] ],
    [ ["kelless","keenness"], ['keles','kenes'] ],
    [ ["Woolloomooloo","flooddoorroommoonlighters","chuchchi"], ['Wolomolo','flodoromonlighters','chuchchi'] ],
    [ ["adanac","soonness","toolless","ppellee"], ['adanac','sones','toles','pele'] ],
    [ ["callalloo","feelless","heelless"], ['calalo','feles','heles'] ],
    [ ["putteellinen","keenness"], ['putelinen','kenes'] ],
    [ ["kelless","voorraaddoosspullen","achcha"], ['keles','voradospulen','achcha'] ],
];

describe("Tests", function() {

    for (const [input, expected] of tests) {
        it(`input: ${input}`, function() {
            assert.deepEqual(dup(input), expected);
        });
    }

});
