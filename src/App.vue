<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Navigation from './components/Navigation.vue'
</script>

<template>
  <Navigation></Navigation>
  <div class="row my-5">
    <div class="col"></div>
  </div>
  <div class="row">
    <div class="col text-end">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </div>
    <div class="col">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
  .logo {
    height: 8em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
