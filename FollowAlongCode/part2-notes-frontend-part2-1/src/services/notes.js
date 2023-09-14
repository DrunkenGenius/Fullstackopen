import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  return requestThen(axios.get(baseUrl))
}

const create = newObject => {
  return requestThen(axios.post(baseUrl, newObject));
}

const update = (id, newObject) => {
  return requestThen(axios.put(`${baseUrl}/${id}`, newObject))
}

const requestThen = (req) => {
    return req.then(res=>res.data)
}

export default {getAll,create,update}