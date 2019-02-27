const Model = require('../models');

module.exports = [{
  method: 'POST',
  path: '/forms',
  // config: {
  //   cors: {
  //     origin: ['*'],
  //     additionalHeaders: ['cache-control', 'x-requested-with'],
  //   },
  // },
  handler: (request, h) => {
    Model.forms.generate(request.payload);
    return request.payload;
  }
}];
