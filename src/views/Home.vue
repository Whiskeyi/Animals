<template>
  <div class="home">
    <!-- 背景+光泽效果 -->
    <Gloss></Gloss>
    <!-- 页面容器 -->
    <div class="container">
      <!-- 左侧展示模块 -->
      <div id="leftContainer">
        <LeftMain @drawPreEvent="tellIndex"></LeftMain>
      </div>
      <!-- 右侧展示模块 -->
      <div id="rightContainer">
        <!-- 输出信息 -->
          <Info @changeEvent="pig"></Info>
          <!-- 右侧标题 -->
          <RightHead v-if="show"></RightHead>
          <RightDraw :chooseIndex="index" v-else></RightDraw>
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
import RightDraw from '@/components/right-draw'
import RightHead from '@/components/right-head'
import LeftMain from '@/components/left-main'

export default {
  name: 'home',
  components: {
    Gloss,Footer,Info,RightDraw,RightHead,LeftMain
  },
  data(){
    return{
      show:true,
      index:-1
    }
  },
  methods:{
    pig(){
      this.show = !this.show;
    },
    tellIndex(index){
      this.index = index;
      console.log("点击的序号",this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
#leftContainer {
  position: absolute;
  left: 10%;
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
@media screen and (max-width: 960px) { // 屏幕小于960px样式
  #leftContainer {
    position: absolute;
    left: 3%;
    width: 30%;
    height: 100%;
    margin: 0 auto;
  }
  #rightContainer {
    position: fixed;
    right: 0%;
    width: 67%;
    height: 100%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 960px) and (max-width:1440px) { // 屏幕大于等于960px小于1440px样式
  #leftContainer {
    position: absolute;
    left: 5%;
    width: 30%;
    height: 100%;
    margin: 0 auto;
  }
  #rightContainer {
    position: fixed;
    right: 2%;
    width: 63%;
    height: 100%;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1440px) and (max-width: 1920px) { // 屏幕大于等于1440px小于1920px样式
 #leftContainer {
    position: absolute;
    left: 2%;
    width: 30%;
    height: 100%;
    margin: 0 auto;
  }
  #rightContainer {
    position: fixed;
    right: 5%;
    width: 65%;
    height: 100%;
    margin: 0 auto;
  }
}
</style>
