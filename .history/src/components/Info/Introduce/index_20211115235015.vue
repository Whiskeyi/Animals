<template>
  <div class="introduce">
      <el-row>
          <el-col :span="8">
              <div class="title">猫</div>
              <div class="subTitle">Cat</div>
          </el-col>
          <el-col :span="16"></el-col>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.introduce {
    background-color: red;
    height: 200px;
}
.title {
    font-size: 72px;
}
.subTitle {
    font-size: 48px;
}
</style>