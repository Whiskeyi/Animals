<template>
  <div class="home">

  </div>
</template>

<script>
// @ is an alias to /src
// 组件引入

export default {
  name: 'home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    width: 100%;
    background-color:rgb(158, 122, 122);
    position: absolute;
    filter: blur(2px); // 背景高斯模糊
  }
</style>
