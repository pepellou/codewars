let map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
};

const decens = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
const digits = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];

for (let i = 2; i <= 9; i++) {
    const decen = decens[i - 2];
    map[decen] = 10 * i;
    for (let j = 1; j < 10; j++) {
        map[decen + '-' + digits[j - 1]] = 10 * i + j;
    }
}

function parseInt_upTo1000(words) {
    if (words.length == 0) {
        return 0;
    }
    const pos_hundred = words.indexOf('hundred');
    const hundreds = pos_hundred == -1 ? [] : words.slice(0, pos_hundred);
    const rest = words.slice(pos_hundred + 1);
    return (hundreds.length == 0 ? 0 : map[hundreds[0]] * 100) + (rest.length == 0 ? 0 : map[rest[0]]);
}

function parseInt(string) {
    const words = string.split(' ').filter(x => x != 'and');
    if (words.length == 2 && words[1] == 'million') {
        return 1000000;
    }
    const pos_thousand = words.indexOf('thousand');
    const thousands = pos_thousand == -1 ? [] : words.slice(0, pos_thousand);
    const rest = words.slice(pos_thousand + 1);
    return (thousands.length == 0 ? 0 : parseInt_upTo1000(thousands) * 1000)
        + (rest.length == 0 ? 0 : parseInt_upTo1000(rest));
}
