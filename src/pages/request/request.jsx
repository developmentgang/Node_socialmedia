import axios from "axios"


export async function createuser(data){
    return axios.post('http://localhost:3001/api/create-user',{data})
}

