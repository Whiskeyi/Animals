<template>
  <div class="infoContainer">
    <div class="infPadding">
      <!-- 简介、图标 -->
    <Introduce></Introduce>
    <!-- 捕食、声音icon -->
    <HabbitVoice></HabbitVoice>
    <!-- 底部介绍 -->
    <IntroduceBottom></IntroduceBottom>
    </div>
  </div>
</template>

<script>
import Introduce from './Introduce'
import HabbitVoice from './habbit-voice'
import IntroduceBottom from './introduce-bottom'
export default {
  name: 'Info',
  components: {
    Introduce, HabbitVoice, IntroduceBottom
  }
}
</script>

<style lang="scss" scoped>
.infoContainer {
    float: left;
    z-index: 10000;
    width: 82%;
    height: 80%;
    margin: 26px 0 0 16px;
    padding: 15px 0px;
    background-color: #fff;
    // color:#fff;
}
.infPadding {
  padding: 0 50px;
}
.infoContainer logo {
    position: absolute;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
  .infoContainer {
    float: left;
    z-index: 10000;
    width: 75%;
    height: 80%;
    margin: 26px 0 0 16px;
    background-color: #fff;
}
}
</style>