<template>
  <div class="leftContainer">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.leftContainer {
  width: 540px;
}
</style>