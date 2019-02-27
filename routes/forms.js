const Model = require('../models');
const moment = require('moment');
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
    const formObj = request.payload;
    const currTime = moment().format(' hh:mm:ss');
    formObj.createdAt = currTime;
    return Model.forms.generate(formObj);
  }
}];
