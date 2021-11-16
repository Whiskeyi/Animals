<template>
  <div class="infoContainer">
    <div class="infPadding">
      <!-- 简介、图标 -->
    <Introduce></Introduce>
    <!-- 底部介绍 -->
    <IntroduceMid></IntroduceMid>
    <!-- 捕食、声音icon -->
    <HabbitPoem></HabbitPoem>
    </div>
  </div>
</template>

<script>
import Introduce from './Introduce'
import HabbitPoem from './habbit-poem'
import IntroduceMid from './introduce-mid'
export default {
  name: 'Info',
  components: {
    Introduce, HabbitPoem, IntroduceMid
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
    // background-color: #fff;
    color:#fff;
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
    // background-color: #fff;
}
}
</style>