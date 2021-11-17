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
}
</style>