// getGoogleData - query google api
const axios = require('axios');
const API = require('../../config.js')

const getGoogleResults = async (req, res) => {
  const searchResults = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)

  return searchResults
}

const getNYTList = async () => {
  const nyTimesResult = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API}`);
  const listNames = nyTimesResult.data.results.map((item) => {
    const { list_name, list_name_encoded } = item;
    return {list_name, list_name_encoded};
  })
  return listNames
}

const getNYTListResults = async (list_name) => {
  const nyTimesListResult = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/${list_name}.json?api-key=${API}`)
  return nyTimesListResult.data.results.books;
}

module.exports = {
  getGoogleResults,
  getNYTList,
  getNYTListResults,
}