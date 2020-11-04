<template>
  <div id="app">
    <ClientForm></ClientForm>
  </div>
</template>

<script>

import ClientForm from '@/components/form/ClientForm.vue';

export default {
  name: 'App',
  components: {
    ClientForm,
  },
}
</script>

<style>
html, body {
  font-size: 16px;
  margin: 0;
  padding: 0;
}

body {
  margin: 2rem;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
