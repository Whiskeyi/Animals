<template>
  <div class="leftContainer">
    <el-row :gutter="40" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.leftContainer {
  width: 540px;
}
.leftContainer .logo {
  width: 60px;
  height: 30px;
}
 @media screen and (max-width: 768px) { // 屏幕小于768px样式
 .leftContainer logo {
   height: 30px;
 }
 }
</style>