const model = require('../../models');

describe('Form generate', () => {
  beforeEach(async () => {
    await model.forms.truncate();
  });
  it('should make an entry in the database with the given form details', async () => {
    const payload = {
      "formname" : "test form",
      "createdAt":"18:00",
      "field" : {"fname": ["abhinav","hemant"],"lname":["dhasmana","sriteja"]}
    }
    await model.forms.generate(payload).then();
    expect(await model.forms.count()).toEqual(1);
  });
});