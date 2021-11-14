<template>
  <div class="bg">
    <div class="gloss">
      <Gloss></Gloss>
      <div class="mainContainer">
        
      </div>
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
  .bg {
    height: 100%;
    width: 100%;
    background-color:rgb(158, 122, 122);
    position: absolute;
    filter: blur(2px); // 背景高斯模糊
    // z-index: -9;
  }
</style>
