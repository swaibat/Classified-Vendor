const ErrorMiddleware = {
  methodError(req, res) {
    res
      .status(405)
      .send({ status: 405, error: 'Ooops this method is not allowed' });
  }
};

export default ErrorMiddleware;
