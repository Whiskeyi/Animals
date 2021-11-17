<template>
  <div class="leftContainer">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="6">
        <el-image class="logo" alt="logo" :src="require('@/icons//animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="6">
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
</style>