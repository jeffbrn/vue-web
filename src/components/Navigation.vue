<script setup>
import routes from '../router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="m in menus" class="nav-item">
            <router-link :to="{ name: m.text }" class="nav-link" :class="{ active: m.active, disabled: m.disable }" href="#">{{ m.text }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menus: [
          { text: 'Home', active: true },
          { text: 'Page1' },
        ],
      }
    },
  }
</script>

<style>
.navbar {
  background-color: #e3f2fd;
}
</style>
