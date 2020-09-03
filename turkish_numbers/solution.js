const digits = [
    'sıfır',
    'bir',
    'iki',
    'üç',
    'dört',
    'beş',
    'altı',
    'yedi',
    'sekiz',
    'dokuz'
];

const decens = [
    'on',
    'yirmi',
    'otuz',
    'kırk',
    'elli',
    'altmış',
    'yetmiş',
    'seksen',
    'doksan'
];

let numbers = [...digits];

for (let i = 0; i < decens.length; i++) {
    numbers.push(decens[i]);
    for (let j = 1; j < digits.length; j++) {
        numbers.push(`${decens[i]} ${digits[j]}`);
    }
}

const getTurkishNumber = (num) => {
    return numbers[num];
}
