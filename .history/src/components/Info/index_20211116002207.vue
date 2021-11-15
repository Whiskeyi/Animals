<template>
  <div class="infoContainer">
    <Introduce></Introduce>
    <HabbitVoice></HabbitVoice>
    <IntroduceBottom></IntroduceBottom>
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
    padding: 15px 15px;
    background-color: #fff;
    color:#fff;
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