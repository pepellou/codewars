let stockList=(A,C)=>(A.length*C.length==0)?'':C.map(c=>[c,A.reduce(($,_) =>_[0]==c?$+parseInt(_.split(' ')[1]):$,0)]).map(e=>`(${e[0]} : ${e[1]})`).join(' - ');
