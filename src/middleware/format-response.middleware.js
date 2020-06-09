module.exports = (req, res, next) => {
  let { statusCode, body } = res;
  statusCode = body !== undefined ? statusCode : 404;
  res.status(statusCode).json({
    status: statusCode === 200 ? "success" : "error",
    statusCode,
    data: body,
  });
  next();
};
