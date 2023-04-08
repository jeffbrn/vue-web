<script setup>
import { useRouter, useRoute } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="test">Navbar</a>
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
            <router-link :to="{ name: m.name }" class="nav-link" :class="{active: m.is_active}">{{ m.caption }}</router-link>
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
        menus: [],
      }
    },
    mounted() {
      const router = useRouter();
      router.getRoutes().forEach(i => {
        this.menus.push({ name: i.name, caption: i.meta.caption, is_active: false });
      });
    },
    watch: {
      $route(to) {
        const curr_menu = to.meta.caption;
        this.menus.forEach(m => { m.is_active = m.caption == curr_menu });
      }
    }
  }
</script>

<style>
.navbar {
  background-color: #e3f2fd;
}
</style>
