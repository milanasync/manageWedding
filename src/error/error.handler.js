class ErrorHandler extends Error {
  constructor(statusCode, msg) {
    super();
    this.message = msg;
    this.statusCode = statusCode;
  }
}

module.exports = ErrorHandler;
