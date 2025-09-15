import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_DATABASE_AUTH,
  params: {
    key: import.meta.env.VITE_AUTH_KEY
  }
})

export default instance