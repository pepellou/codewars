const p = parseInt
const e = ''
const s = _ => (_+e).split(e)
const l = (a,b) => {
    while (a.length < b.length) {
        a.unshift('0');
    }
    return a;
}

function add(num1, num2) {
    let n1 = s(num1)
    let n2 = s(num2)
    n1 = l(n1, n2);
    n2 = l(n2, n1);
    return p(n1.map((e,i) => p(e) + p(n2[i])).join(e));
}
