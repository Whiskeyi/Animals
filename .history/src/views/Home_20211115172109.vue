<template>
  <div class="bg">
    <div class="gloss">
      <Gloss></Gloss>
      <div id="leftContainer"></div>
      <div id="rightContainer">
        <Info></Info>
        <RightHead></RightHead>
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
import Info from '@/components/Info'
import RightHead from '@/components/RightHead'

export default {
  name: 'home',
  components: {
    Gloss,Footer,Info,RightHead
  }
}
</script>

<style lang="scss" scoped>
  .bg {
    height: 100%;
    width: 100%;
    background-color:rgb(158, 122, 122);
    position: absolute;
    transition: background-color 2s ease-in; // 背景颜色2S过渡
    filter: blur(0.5px); // 背景高斯模糊
    // z-index: -9; //暂时注释,影响调试
  }
  #rightContainer {
    position: fixed;
    right: 10%;
    width: 640px;
    height: 100%;
    margin: 0 auto;
    background-color: #531435;
  }
  #leftContainer {
    position: relative;
    left: 10%;
    width: 640px;
    height: 100%;
    margin: 0 auto;
    background-color: aquamarine;
  }
</style>
