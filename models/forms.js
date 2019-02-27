'use strict';
module.exports = (sequelize, DataTypes) => {
  const forms = sequelize.define('forms', {
    formname: DataTypes.STRING,
    createdAt: DataTypes.TIME,
    field: DataTypes.JSON
  }, {
    timestamps: false
  });
  forms.generate = formObj =>(
  forms.findOrCreate({ where: { formname: formObj.formname }, defaults: formObj })
      .spread((user, created) => {
        if (created === true) {
          console.log(`Inserted book with id: ${formObj.formname}`);
        } else {
          console.log(`Book with id: ${formObj.formname} already exists`);
        }
      }).catch((errorObj) => {
        console.log(errorObj.message);
      })
  )

  forms.fillForm = (formObj) => (
    forms.update({
      field: formObj.field,
    }, {
      where: {
        formname: formObj.formname,
        }
      }
    )
  )

  forms.fetchData = () => (
    forms.findAll({attributes: ['formname', 'createdAt']})
  )
  return forms;
};