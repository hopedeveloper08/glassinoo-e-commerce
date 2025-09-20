import axios from 'axios'

// const baseURL = 'https://glassinoo.ir/api/'
const baseURL = 'http://192.168.1.7:8000/api/'
// const baseURL = 'http://10.240.96.195:8000/api/'

const backend = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default backend