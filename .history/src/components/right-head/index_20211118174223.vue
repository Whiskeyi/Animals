<template>
  <div class="rightHeadContainer">
      <el-image class="logo" alt="logo" :src="require('@/icons/index.png')"></el-image>
      <h1 class="vertical">Animals——爱生万物</h1>
      <el-switch v-model="switcher" active-color="#fafafa"></el-switch>
  </div>
</template>

<script>
export default {
    data() {
        return {
            switcher: 'true'
        }
    }
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
    line-height: 46px;
    color: #fff;
    font-size: 1.9vw;
}
.logo {
    width: 5vw;
    // width: 90px;
    padding-bottom: 20px;
}
.el-switch__core {
    margin: 0;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #DCDFE6;
    outline: 0;
    border-radius: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #DCDFE6;
    -webkit-transition: border-color .3s,background-color .3s;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
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