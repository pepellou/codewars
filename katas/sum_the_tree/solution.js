let sumTheTreeValues = _ =>
  _ == null
    ? 0
    : _.value
      + sumTheTreeValues(_.left)
      + sumTheTreeValues(_.right);
