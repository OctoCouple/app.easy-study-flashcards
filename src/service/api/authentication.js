import axios from '../config'

export const register = ({ email, name, password }) => new Promise((resolve, reject) => {
  axios
    .post('/register', { email, name, password })
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error)
    })
})
