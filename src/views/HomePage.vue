<script setup>
import useServer from '@/composables/loadServers.js'
import BaseServer from '@/components/BaseServer.vue'

const { servers, fetchServers } = useServer()
</script>

<template>
  <main class="min-h-screen bg-gradient-to-r from-fuchsia-900 to-red-700">
    <form>
      <input
        id="newServer"
        v-model="server"
        type="text"
        autocomplete="off"
        placeholder="Minecraft server URL, eg: hypixel.net"
      />
      <button id="addBtn" type="button" @click="fetchServers(server)">
        Load Server
      </button>
    </form>

    <div class="container mx-auto grid grid-cols-4 gap-4 py-8">
      <BaseServer v-for="server in servers" :key="server.ip" :server="server" />
    </div>
  </main>
</template>

<style lang="postcss" scoped>
form {
  @apply flex items-center justify-center pt-4;
}
input {
  @apply w-1/2 rounded-l-md bg-opacity-90 p-2 text-2xl outline-none;
}
button {
  @apply rounded-r-md bg-zinc-700 p-2 font-sans text-3xl font-bold text-white;
  &:hover {
    @apply bg-zinc-800 text-yellow-300;
  }
}
</style>
