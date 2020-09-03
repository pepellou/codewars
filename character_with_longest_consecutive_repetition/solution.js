function longestRepetition(s) {
    let min = [ "", 0 ],
        count = 0,
        current = "";

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c == current) {
            count++;
        } else {
            if (count > min[1]) {
                min[0] = current;
                min[1] = count;
            }
            count = 1;
            current = c;
        }
    }
    if (count > min[1]) {
        min[0] = current;
        min[1] = count;
    }

    return min;
}
