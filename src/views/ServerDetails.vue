<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import useServers from '@/composables/loadServers'

const route = useRoute()

const { fetchServer, currentServer } = useServers()

onMounted(async () => {
  await fetchServer(route.params.hostname)
  console.log(route.params.hostname)
})

onUnmounted(() => {
  currentServer.value = null
})
</script>

<template>
  <main
    v-if="currentServer"
    class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-fuchsia-900 to-red-700"
  >
    <div>
      <h1 class="text-6xl font-thin text-slate-800">
        Players on server: {{ currentServer.players.online }}
      </h1>
    </div>

    <div class="pt-8">
      <h2>
        Player list:
        <ul>
          <li v-for="name in currentServer.players.list" :key="name.id">
            {{ name }}
          </li>
        </ul>
      </h2>
    </div>
  </main>
</template>
