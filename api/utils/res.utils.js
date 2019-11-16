const sendResult = async (res, status, message, data) => {
  if (data && data.length === 0) {
    return res.status(status).send({ status: 404, message: 'Oops no results found' });
  }
  return res.status(status).send({ status, message, data });
};

export default sendResult;
