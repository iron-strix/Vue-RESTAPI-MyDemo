import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.mcsrvstat.us/2/',
})

const useApi = () => {
  return { instance }
}

export default useApi
