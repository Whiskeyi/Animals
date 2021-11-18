<template>
  <div class="rightHeadContainer">
      <el-image class="logo" alt="logo" :src="require('@/icons/index.png')"></el-image>
      <h1 class="vertical">Animals——爱生万物</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.rightHeadContainer {
    float: left;
    height: 400px;
    width: 100px;
    margin: 26px 0 0 16px;
}
.vertical {
    writing-mode: vertical-lr;
    padding-left: 5px;
    color: #fff;
    font-size: 3.5vw;
}
.logo {
    width: 5vw;
    // width: 90px;
    padding-bottom: 20px;
}
// @media screen and (max-width: 1440px) { // 屏幕小于1440px样式
//     .rightHeadContainer {
//         float: left;
//         height: 400px;
//         width:85px;
//         margin: 26px 0 0 0;
//     }
//     .vertical {
//         writing-mode: vertical-lr;
//         padding-right: 0;
//         color: #fff;
//     }
// }
</style>