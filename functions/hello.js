exports.handler = () => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello world from Netlify serverless function'),
  };
};
