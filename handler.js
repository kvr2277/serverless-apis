'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World!!! Here we come!!!',
      },
      null,
      2
    ),
  };
};
