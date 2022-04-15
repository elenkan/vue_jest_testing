<template>
  <v-app>
    <div id="app">
      <Home/>
    </div>
  </v-app>
</template>

<script>
import Home from "@/views/Home";

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>

<style lang="scss">
body {
  width: 100%;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
