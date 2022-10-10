import { ref } from 'vue'
import useApi from '@/composables/useApi'

const servers = ref([])
const api = useApi()

const useServer = () => {
  const fetchServers = async (server) => {
    //console.log(server)
    const { data } = await api.instance.get(server)
    console.log(data)
    servers.value.push(data)
    console.log(servers.value)
  }
  return { servers, fetchServers }
}

export default useServer
