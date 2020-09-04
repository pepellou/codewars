let n = [...Array(600).keys()].map(_=>_+1),
    s = [ 0 ];
const e = '',
      p = _ => (e + _).split(e),
      v = $ => _ => $.indexOf(_) == -1;

for (let i = 1; i <= 500; i++) {
    const a = p(s[s.length - 1]);
    let j = 0, f = 0;
    while (!f) {
        if (p(n[j]).every(v(a))) {
            s.push(n.splice(j, 1)[0]);
            f++;
        }
        j++;
    }
}

const findNum = $ => s[$];
