let findEvenIndex = a =>
    ((s,o,l,v,e,d) =>

        d(l(d(o(a.map((_,i)=>[i,s(v(a,i))==s(e(a,i))])))))

    )(
        _ => _.reduce((_,$)=>_+$,0),
        _ => _.filter(_ => _[1]),
        _ => _ || [-1],
        (_, i) => _.slice(0, i),
        (_, i) => _.slice(i+1),
        _ => _[0]
    );
