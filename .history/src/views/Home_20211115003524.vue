<template>
  <div class="home">
    <div class="gloss">
      <Gloss></Gloss>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 组件引入
import Gloss from '@/components/Gloss'

export default {
  name: 'home',
  components: {
    Gloss
  }
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100%;
    width: 100%;
    background-color:rgb(158, 122, 122);
    position: absolute;
    filter: blur(4px); // 背景高斯模糊
  }
</style>
