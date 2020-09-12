function per(n) {
    let res = [];
    while (n >= 10) {
        n = (n+'').split('').map(_=>parseInt(_)).reduce((p,e)=>p*e,1);
        res.push(n);
    }
    return res;
}
