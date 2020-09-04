let rank = (p, r, i, z, e) =>
    ((d, r, a, w) =>

        (p == '')           ? 'No participants'
        : (i > w(a(p,','))) ? 'Not enough participants'
        : a(p,',').map(
            (_, $)=>[_,r[$]*(w(_)+a(_.toLowerCase(),'').map(_=>d.indexOf(_)).reduce((_,$)=>_+$,0))]
        ).sort(($,_)=>_[1]==$[1]?(_[0]>$[0]?-1:1):_[1]-$[1])
        [i-1][0]
    )
(
    '0abcdefghijklmnopqrstuvwxyz',
    r,
    (_,$) => _.split($),
    _ => _.length
);
