<template>
  <div class="infoContainer">

  </div>
</template>

<script>
import Introduce from './Introduce'
import habbitVoice from './habbit-voice'
import introduceBottom from './introduce-bottom'
export default {
  
}
</script>

<style lang="scss" scoped>
.infoContainer {
    float: left;
    z-index: 10000;
    width: 82%;
    height: 80%;
    margin: 26px 0 0 16px;
    background-color: #fff;
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