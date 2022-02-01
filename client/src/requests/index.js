import axios from 'axios';

const searchGoogle = (query, type ,count=10, page=1) => {
  return new Promise((resolve, reject) => {
    if ( type ) {
      type == 'author',
      stringToAdd = `&inauthor:${query}`
    }
    axios.get(`/search?q=${query}&count=${count}&page=${page}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
};

const getNYTimesList = () => {
  return new Promise((resolve, reject) => {
    axios.get('/nytimeslists')
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
};

const getNYTimesCategory = (list_name_encoded) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/nytimeslists/list?category=${list_name_encoded}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err))
  })
};

export { searchGoogle, getNYTimesList, getNYTimesCategory }