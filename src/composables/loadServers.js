import { ref } from 'vue'
import useApi from '@/composables/useApi.js'

const servers = ref([])
const currentServer = ref(null)
const api = useApi()

const useServer = () => {
  const fetchServers = async (server) => {
    //console.log(server)
    const { data } = await api.instance.get(server)
    console.log(data)
    servers.value.push(data)
    console.log(servers.value)
  }

  const fetchServer = async (id) => {
    const { data } = await api.instance.get(`${id}`)
    currentServer.value = data
    console.log(currentServer.value)
  }

  return { servers, fetchServers, fetchServer, currentServer }
}

export default useServer
