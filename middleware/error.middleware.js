export const errorHandler = (err, req, res, ___) => {
  const error = { ...err };
   console.log(error)
  if (error.code === 'ECONNREFUSED') {
    error.code = 500;
  }
  const message = error.message ? error.message.replaceAll(/\"/g, "'") : 'Internal Error';
  const code = error.code ?? 500;

  const response = {
    status: false,
    data: message
  };

  res.status(code).json(response);
};
