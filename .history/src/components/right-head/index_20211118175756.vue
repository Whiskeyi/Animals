<template>
  <div class="rightHeadContainer">
      <el-col :span="5">
          <el-row>
      <el-image class="logo" alt="logo" :src="require('@/icons/index.png')"></el-image>
          </el-row>
          <el-row>
      <h1 class="vertical">Animals——爱生万物</h1>
          </el-row>
          <el-row>
      <div class="trans">
        <el-switch v-model="switcher" active-color="#fafafa" @change="tranOn()"></el-switch>
      </div>
          </el-row>
      </el-col>
  </div>
</template>

<script>
export default {
    data() {
        return {
            switcher: true
        }
    },
    methods: {
        tranOn() {
            // this.switcher = !this.switcher
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
.trans {
    margin-top: 200%;
    // transform: translateX(-50%) rotate(-90deg);
    margin-left: 30px;
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