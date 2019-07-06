const app = require('./config/app.js');

const handler = async (event, context, callback) => {
  const { path, httpMethod, headers, requestContext } = event;
  console.log('path is ', requestContext)
  const request = {
    url: resourcePath
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!')
  };
  return response;
}

//app.listen(3000, () => console.log('listening on port 3000'));

module.exports.handler = handler;
