import axios from 'axios';

const authenticateUser = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3010/authenticate')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/users?username=${username}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const dumpFriend = (action) => {
  console.log(action)
  return new Promise((resolve, reject) => {
    axios.put('http://localhost:3010/users/friends', action)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  })
}

const putUserBook = (book) => {
  return new Promise((resolve, reject) => {
    axios.put('http://localhost:3010/users/books', book)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  })
}

const searchGoogle = (query, count=10, page=1) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/search?q=${query}&count=${count}&page=${page}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesList = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3010/nytimeslists')
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

const getNYTimesCategory = (list_name_encoded) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3010/nytimeslists/list?category=${list_name_encoded}`)
    .then(response => resolve(response.data))
    .catch(err => reject(err));
  });
};

export {
  authenticateUser,
  getUser,
  putUserBook,
  dumpFriend,
  searchGoogle,
  getNYTimesList,
  getNYTimesCategory,
}