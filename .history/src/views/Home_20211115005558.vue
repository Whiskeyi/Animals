<template>
  <div class="bg">
    <div class="gloss">
      <Gloss></Gloss>
      <div class="mainContainer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 组件引入
import Gloss from '@/components/Gloss'
import Footer from '@/components/Footer'

export default {
  name: 'home',
  components: {
    Gloss,Footer
  }
}
</script>

<style lang="scss" scoped>
  .bg {
    height: 100%;
    width: 100%;
    background-color:rgb(158, 122, 122);
    position: absolute;
    filter: blur(0.8px); // 背景高斯模糊
    z-index: -9;
  }
  .mainContainer {
    margin: 0 200px;
  }
</style>
