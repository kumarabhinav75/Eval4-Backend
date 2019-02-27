const Model = require('../models');

module.exports = [{
  method: 'POST',
  path: '/form/fill',
  // config: {
  //   cors: {
  //     origin: ['*'],
  //     additionalHeaders: ['cache-control', 'x-requested-with'],
  //   },
  // },
  handler: (request, h) => {
    Model.forms.fillForm(request.payload);
    return request.payload;
  }
}];
