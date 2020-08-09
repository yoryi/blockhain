'use strict';

try {
  require('node-env-file')('.env');
} catch (e) {
  console.log(e);
} finally {
  var merchantAPI = require('../index.js');
  merchantAPI.start({
    port: process.env.PORT || 5000,
    bind: process.env.BIND || '0.0.0.0'
  });
  if (process.env.RPC) {
    merchantAPI.startRPC({
      api_code: process.env.API_CODE
    });
  }
}
