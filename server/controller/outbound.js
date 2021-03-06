// getGoogleData - query google api
const axios = require('axios');
const API = require('../../config.js')

const getGoogleResults = async (req, res) => {
  if (req.query.q) {
    const search = req.query.q;
    const count = req.query.count || 10;
    const page = req.query.page || 1;
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${count}&nextPageToken=${page}`)
      const { items } = response.data;
      res.status(200).send(items)
    } catch (err) {
      res.status(500).send()
    };
  } else {
    res.status(422).send({error: 'Empty query!'})
  }
}

const getNYTimesLists = async (req, res) => {
  try {
    const nyTimesResult = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API}`);
    const listNames = nyTimesResult.data.results.map((item) => {
    const { list_name, list_name_encoded } = item;
    return { list_name, list_name_encoded }
    })
    res.status(200).json(listNames)
  } catch (err) {
    res.status(500).send(err)
  }
}

const getNYTListResults = async (req, res) => {
  if (req.query.category) {
    try {
      const nyTimesListResult = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${req.query.category}.json?api-key=${API}`)
      res.status(200).json(nyTimesListResult.data.results.books)
    } catch (err) {
      res.status(500).send(err)
    }
  } else {
    res.status(422).send({error: 'Empty query!'})
  }
}



module.exports = {
  getGoogleResults,
  getNYTimesLists,
  getNYTListResults,
}