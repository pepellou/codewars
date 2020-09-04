function lastDigitSimple(base, exp) {
    if (exp == 0) {
        return 1;
    }
    var reminders = [
        [0],
        [1],
        [2, 4, 8, 6],
        [3, 9, 7, 1],
        [4, 6],
        [5],
        [6],
        [7, 9, 3, 1],
        [8, 4, 2, 6],
        [9, 1]
    ];
    var digits_cycle = reminders[base % 10];
    return digits_cycle[(exp - 1) % digits_cycle.length];
}

function reminder_4_of_pow(base, exp) {
    if (exp == 0) {
        return 1;
    }
    if (exp == 1) {
        return base % 4;
    }
    if (base == 0) {
        return 0;
    }
    if ((base % 4) % 2 == 0) {
        return 0;
    }
    if (base % 4 == 3) {
        return exp % 2 == 0 ? 1 : 3;
    }
    return 1;
}

function lastDigit(nums) {
    if (nums.length == 0) {
        return 1;
    }
    if (nums.length == 1) {
        return nums[0];
    }
    const base = nums.shift();
    switch(base) {
        case 0:
    }
    return 0;
}
