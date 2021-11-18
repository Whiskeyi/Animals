<template>
  <div class="home">
    <!-- 背景+光泽效果 -->
    <Gloss></Gloss>
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
#leftContainer {
  position: absolute;
  left: 15%;
  width: 25%;
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
@media screen and (min-width: 960px) {
  #leftContainer {
    position: absolute;
    left: 8%;
    width: 15%;
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
@media screen and (min-width: 1440px) { // 屏幕大于1440px样式
  #leftContainer {
    position: absolute;
    left: 8%;
    width: 33%;
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
