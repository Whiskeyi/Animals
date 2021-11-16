<template>
  <div class="home">
    <!-- 背景+光泽效果 -->
    <div class="bg">
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
  },
  data() {
    return {
      bgColor: ''
    }
  },
  mounted() {
    setInterval(this.changeBgColor(),1000)
  },
  methods: {
    changeBgColor() {
      let arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
                      "#FF5E99", "#828282", "#52433D", "#947A6D", "#080808", "#0C0C0C",
                      "#434343", "#B19693", "#434343", "#EFBB24", "#90B44B", "#373C38",
                      "#BDC0BA", "#BDC0BA", "#BDC0BA", "#434343","#BDC0BA", "#BDC0BA"];
      console.log(arrColor[Math.floor(Math.random() * arrColor.length) - 1])
    }
  }
}
</script>

<style lang="scss" scoped>
body{
overflow:scroll;
overflow-x:hidden;
}
.home {
  // 滚动条样式修改（待定）
}
.bg {
  height: 100%;
  width: 100%;
  background-color:rgb(158, 122, 122);
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
