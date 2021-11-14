<template>
  <div id="app">
    <!-- 入口 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html, body {  // 去除白边
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
}
</style>
