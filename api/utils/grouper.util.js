
const groupBy = (key, user) => array => array.reduce((objectsByKeyValue, obj) => {
  const value = obj[key] === user.id ? obj.ReceiverId : obj[key];
  objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
  return objectsByKeyValue;
}, {});

export default groupBy;
