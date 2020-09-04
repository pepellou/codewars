function duplicateCount(text){
    return text
        .toLowerCase()
        .split('')
        .reduce(
            (_,c) => (_._.indexOf(c)<0)
            ? { _:_._.concat([c]),$:_.$ }
            : (_.$.indexOf(c)<0)
            ? { _:_._,$:_.$.concat([c]) }
            : _
            ,
            {_:[],$:[]}
        ).$.length;
}
