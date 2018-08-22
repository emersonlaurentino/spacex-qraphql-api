const baseUrl = 'https://api.spacexdata.com/v2';
const getUrl = endpoint => `${baseUrl}/${endpoint}`;
const getData = ({ data }) => data;

module.exports = {
  baseUrl,
  getUrl,
  getData,
};
