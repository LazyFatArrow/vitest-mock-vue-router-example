<script setup>
  import { useRouter } from 'vue-router'
  import { RouteNames } from '../../router/router'

  const router = useRouter()

  function onClick() {
    router.push({
      name: RouteNames.GREETING,
      query: {
        name: 'John Doe',
      },
    })
  }
</script>

<template>
  <button @click="onClick">Go to Greeting</button>
</template>
