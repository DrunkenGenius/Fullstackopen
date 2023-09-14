import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => {
    return(reqThen(axios.get(url)))
}

const update = (person) =>{
    console.log(person)
    console.log(`${url}/${person.id}`)
    return (reqThen(axios.put(`${url}/${person.id}`, person)))
}

const create = (person) => {
    return(reqThen(axios.post(url, person)))
}

const deleteEntry = (id) => {
    return reqThen(axios.delete(`${url}/${id}`))
}

const reqThen = (req) => req.then(res => res.data);

export default {getAll, create, deleteEntry, update}