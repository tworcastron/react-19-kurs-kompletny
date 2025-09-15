import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_DATABASE
})

export default instance