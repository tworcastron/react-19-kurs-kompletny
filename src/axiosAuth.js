import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1',
  params: {
    key: 'AIzaSyCqnoyvSG7X2urzhnPSBkhi1f84s-STUlo'
  }
})

export default instance