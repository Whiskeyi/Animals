<template>
  <transition name="fade">
  <div class="home">
    <!-- 背景+光泽效果 -->
    <div class="bg" style="background-color: rgb(158, 122, 122);">
      <Gloss></Gloss>
    </div>
    <!-- 页面容器 -->
    <div class="container">
      <!-- 左侧展示模块 -->
      <div id="leftContainer">
        <LeftMain></LeftMain>
      </div>
      <!-- 右侧展示模块 -->
      <div id="rightContainer">
        <!-- 输出信息 -->
          <Info></Info>
          <!-- 右侧标题 -->
          <RightHead></RightHead>
          <!-- 尾部 -->
          <Footer></Footer>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
// @ is an alias to /src
// 组件引入
import Gloss from '@/components/Gloss'
import Footer from '@/components/Footer'
import Info from '@/components/Info'
import RightHead from '@/components/right-head'
import LeftMain from '@/components/left-main'

export default {
  name: 'home',
  components: {
    Gloss,Footer,Info,RightHead,LeftMain
  }
}
</script>

<style lang="scss" scoped>
.bg {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: background-color 2s ease-in; // 背景颜色2S过渡
  filter: blur(0.5px); // 背景高斯模糊
  // z-index: -9; //暂时注释,影响调试
}
#leftContainer {
  position: absolute;
  left: 10%;
  width: 30%;
  height: 100%;
  margin: 0 auto;
}
#rightContainer {
  position: fixed;
  right: 10%;
  width: 50%;
  height: 100%;
  margin: 0 auto;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
  #leftContainer {
  position: absolute;
  left: 5%;
  width: 36%;
  height: 100%;
  margin: 0 auto;
}
#rightContainer {
  position: fixed;
  right: 5%;
  width: 54%;
  height: 100%;
  margin: 0 auto;
}
}
</style>
