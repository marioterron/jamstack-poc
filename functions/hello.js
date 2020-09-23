exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello world from Netlify serverless function' }),
  };
};
