import axios from 'axios'

// const baseURL = 'http://127.0.0.1:8000/api/'
const baseURL = 'http://192.168.1.7:8000/api/'
// const baseURL = 'http://10.125.168.195:8000/api/'

const backend = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default backend