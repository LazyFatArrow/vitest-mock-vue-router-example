<script setup>
  import { useRoute } from 'vue-router'
  import { RouteNames } from '../../router/router'

  const route = useRoute()
</script>

<template>
  <h1 data-test-id="greeting-message">Good morning {{ route.query.name }}</h1>

  <RouterLink :to="{ name: RouteNames.HOME }">Go Back Home</RouterLink>
</template>
