<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
      <RouterLink to="/alert">Alert</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>