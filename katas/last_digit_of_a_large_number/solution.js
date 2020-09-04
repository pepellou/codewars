function lastDigit(base, exp) {
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
    var digits_cycle = reminders[base.charAt(base.length - 1)];
    return digits_cycle[(exp.substring(exp.length - 3) - 1) % digits_cycle.length];
}
