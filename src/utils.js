const baseUrl = 'https://api.spacexdata.com/v2';
const getUrl = endpoint => `${baseUrl}/${endpoint}`;
const getData = ({ data }) => data;
const addOrderSort = ({ baseScope, order, sort }) => {
  let newUrl = baseScope;

  if (order) {
    newUrl = `${newUrl}${sort ? '?' : '&'}order=${order.toLowerCase()}`;
  }

  if (sort) {
    newUrl = `${newUrl}${order ? '&' : '?'}sort=${sort}`;
  }

  return newUrl;
};

module.exports = {
  addOrderSort,
  baseUrl,
  getUrl,
  getData,
};
