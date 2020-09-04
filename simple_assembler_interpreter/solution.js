function simple_assembler(program) {
    var rs = {};
    var pointer = 0;
    var read = n =>
        /[a-z]/.test(n)
            ? rs[n]
            : typeof n == 'string'
            ? parseInt(n)
            : n;
    var processor = {
        mov: (op1, op2) => { rs[op1] = read(op2); },
        inc: (op) => { rs[op]++; },
        dec: (op) => { rs[op]--; },
        jnz: (op1, op2) => { if (rs[op1] != 0) { pointer += op2 - 1; } }
    };

    while (pointer < program.length) {
        var op = program[pointer].split(' ');
        processor[op[0]](op[1], op[2]);
        pointer++;
    }

    return rs;
}
