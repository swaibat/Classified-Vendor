/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-unused-expressions */
function validate(object, data, cb) {
  for (const key in data) {
    let error;
    const value = data[key];
    let objValue = object[key];
    objValue && typeof objValue !== 'string'
      ? objValue = objValue.toString() : '';

    value.req && (!object[key] || !objValue)
      ? error = `${key} is required` : '';

    (value.alpha && objValue) && !objValue.match(/^[a-zA-Z]+$/)
      ? error = `${key} should be alphabetic` : '';

    (value.bool && objValue) && !objValue.match(/^(true|false)$/)
      ? error = `${key} should be either true or false` : '';

    error ? cb(error) : '';
  }
}


export default validate;
