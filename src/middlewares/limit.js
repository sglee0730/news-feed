export default (max = 100) => {
  return (req, res, next) => {
    const request = parseInt(req.query.limit || max);
    if (request > max || request < 1) {
      return res.status(400).send('허용된 limit 값이 아닙니다.');
    }

    res.locals.limit = request;

    return next();
  };
};
