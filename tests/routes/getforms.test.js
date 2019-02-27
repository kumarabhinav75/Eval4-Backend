const Model = require('../../models');

describe('getForm', () => {
  it('Should fetch data from the db', async() => {
    const data = await Model.forms.fetchData();
    expect(data.length).toEqual(0);
    // expect(data[0].forms.dataValues).toEqual({ formname: 'test form', createdAt: '18:00:00'});
  })
})