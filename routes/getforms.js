const Model = require('../models');

module.exports = [{
  method: 'GET',
  path: '/forms',
  // config: {
  //   cors: {
  //     origin: ['*'],
  //     additionalHeaders: ['cache-control', 'x-requested-with'],
  //   },
  // },
  handler: (request, h) => {
    return Model.forms.fetchData();
  }
}];
