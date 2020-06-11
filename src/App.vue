<template>
  <div id="app">
    <header></header>
    <div id="main">
      <router-view></router-view>
      <router-view name="content"></router-view>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
  }
  #app {
    background-color: $background-color;
    color: $text-color;
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
  #main {
    display: grid;
    grid-template-columns: 10% auto;
  }
</style>
