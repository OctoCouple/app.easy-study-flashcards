import axios from '../config'

export const update = (attributes, id) => new Promise((resolve, reject) => {
  axios
    .patch(`/user/${id}`, attributes)
    .then((res) => {
      resolve(res.data)
    })
    .catch((error) => {
      reject(error)
    })
})
