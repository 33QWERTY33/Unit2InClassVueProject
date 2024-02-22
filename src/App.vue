<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="p-3 text-primary-emphasis bg-success-subtle border border-primary-subtle rounded-3">
      <ul class="nav justify-content-center">
        <li>
          <a class="nav-link active">
            <RouterLink to="/" class="btn btn-info">Home</RouterLink>
          </a>
        </li>
        <li>
          <a class="nav-link active">
            <RouterLink to="/counter" class="btn btn-danger">Counter</RouterLink>
          </a>
        </li>
        <li>
          <a class="nav-link active">
            <RouterLink to="/form" class="btn btn-secondary">Form</RouterLink>
          </a>
        </li>
        <li>
          <a class="nav-link active">
            <RouterLink to="/alert" class="btn btn-success">Alert</RouterLink>
          </a>
        </li>
      </ul>
    </div>
  </header>

  <RouterView />
</template>