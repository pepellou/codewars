let ipToInt32=_=>_.split('.').map((_,$)=>parseInt(_)*Math.pow(256,3-$)).reduce((_,$)=>_+$);
