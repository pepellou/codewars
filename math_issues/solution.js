Math.round = _ => ~~(0.5 + _);

Math.ceil = _ => ~~_ == _ ? _ : 1 + ~~_;

Math.floor = _ => ~~_;
