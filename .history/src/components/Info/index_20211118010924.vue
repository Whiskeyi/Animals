<template>
  <div class="infoContainer">
    <div class="infPadding">
      <!-- 标题、声音icon -->
    <Introduce></Introduce>
    <!-- 简介 -->
    <IntroduceMid></IntroduceMid>
    <!-- 捕食、诗 -->
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
    color:#fff;
}
.infPadding {
  padding: 0 0 0 50px;
}
.infoContainer logo {
    position: absolute;
}
// @media screen and (max-width: 960px) { // 屏幕小于960px样式
//   .infoContainer {
//     float: left;
//     z-index: 10000;
//     width: 76%;
//     height: 80%;
//     margin: 26px 0 0 16px;
//   }
// }
// @media screen and (min-width: 960px) and (max-width:1440px) { // 屏幕大于等于960px小于1440px样式
//   .infoContainer {
//     float: left;
//     z-index: 10000;
//     width: 75%;
//     height: 80%;
//     margin: 26px 0 0 16px;
//   }
// }
@media screen and (max-width: 1280px) { // 屏幕<1280px样式
  .infoContainer {
    float: left;
    z-index: 10000;
    width: 70%;
    height: 80%;
    margin: 26px 0 0 16px;
  }
}
</style>