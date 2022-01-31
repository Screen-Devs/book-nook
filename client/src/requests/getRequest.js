import axios from 'axios';

const searchGoogle = (query, count=10, page=1) => {
  try {
    axios.get(`/search?q=${query}&count=${count}&page=${page}`)
    .then((serverResponse) => {
      return serverResponse.data;
    })
  } catch (err) {
    console.error(err)
  }
}

export { searchGoogle }