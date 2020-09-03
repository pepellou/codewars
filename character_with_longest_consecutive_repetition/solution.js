function longestRepetition(s) {
    let min = [ "", 0 ], cnt = 0, cur = "";

    for (let i = 0; i <= s.length; i++) {
        if (s[i] != cur) {
            if (cnt > min[1]) {
                min = [ cur, cnt ];
            }
            cur = s[i];
            cnt = 0;
        }
        cnt++;
    }

    return min;
}
