import axios from "axios"
const baseUrl = "api/persons"

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const create = (personObject) => {
  const request = axios.post(baseUrl, personObject)
  return request.then((response) => response.data)
}

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

const changeNumber = (id, changedNumberPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, changedNumberPerson)
  return request.then((response) => response.data)
}

export default {
  getAll,
  create,
  deletePerson,
  changeNumber,
}
