<script setup>
const props = defineProps({
  server: {
    type: Object,
    default: () => ({
      ip: '8.8.8.8',
      hostname: 'Unknown',
      imageUrl: 'https://via.placeholder.com/150',
      players: {
        online: 1,
        max: 20,
        list: 'Alastara',
      },
    }),
  },
})

console.log(props.ip)
console.log(props.hostname)
</script>

<template>
  <RouterLink
    :to="`/server/${props.server.hostname}`"
    class="rounded-lg bg-white shadow-lg"
  >
    <img
      class="w-full rounded-t-lg object-cover"
      :src="props.server.imageUrl"
    />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.server.hostname }}
      </h2>
    </div>
  </RouterLink>
</template>
