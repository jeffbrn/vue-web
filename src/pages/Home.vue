<template>
  <h1 class="mb-3">Home</h1>

  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Deg C</th>
        <th>Deg F</th>
        <th>Summary</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data">
        <td>{{ row.date }}</td>
        <td>{{ row.temperatureC }}</td>
        <td>{{ row.temperatureF }}</td>
        <td>{{ row.summary }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  inject: ['http'],
  data() {
    return {
      data: [],
    }
  },
  async mounted() {
    this.data = await this.http().getData();
  }
}
</script>