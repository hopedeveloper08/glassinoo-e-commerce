import axios from 'axios'


const baseURL = 'http://192.168.1.2:8000/api/'
// const baseURL = 'http://10.184.5.195:8000/api/'


const backend = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default backend