import axios from 'axios';

const authenticateUser = () => {
  return new Promise((resolve, reject) => {
    axios.get('/authenticate')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`/users?username=${username}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const searchGoogle = (query, count=10, page=1) => {
  return new Promise((resolve, reject) => {
    axios.get(`/search?q=${query}&count=${count}&page=${page}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesList = () => {
  return new Promise((resolve, reject) => {
    axios.get('/nytimeslists')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesCategory = (list_name_encoded) => {
  return new Promise((resolve, reject) => {
    axios.get(`/nytimeslists/list?category=${list_name_encoded}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

export {
  authenticateUser,
  getUser,
  searchGoogle,
  getNYTimesList,
  getNYTimesCategory,
}