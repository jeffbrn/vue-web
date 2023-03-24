<script setup>
  import { ref } from 'vue'

  defineProps({
    msg: String,
  })

  const count = ref(0)
</script>

<template>
  <div class="row text-center">
    <div class="col">
      <div class="row">
        <div class="col">
          <h1 class="fw-bolder py-4">{{ msg }}</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="card mx-auto border border-0" style="width: 26rem">
            <div class="card-body">
              <button
                type="button"
                class="btn btn-primary mb-4"
                @click="count++"
              >
                count is {{ count }}
              </button>
              <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
              </p>

              <p>
                Check out
                <a
                  href="https://vuejs.org/guide/quick-start.html#local"
                  target="_blank"
                  >create-vue</a
                >, the official Vue + Vite starter
              </p>
              <p>
                Install
                <a
                  href="https://github.com/vuejs/language-tools"
                  target="_blank"
                  >Volar</a
                >
                in your IDE for a better DX
              </p>
              <p class="text-secondary">
                Click on the Vite and Vue logos to learn more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }
</style>
