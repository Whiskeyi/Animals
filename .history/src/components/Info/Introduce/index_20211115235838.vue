<template>
  <div class="introduce">
      <el-row>
          <el-col :span="8">
              <div class="title">猫</div>
              <div class="subTitle">Cat</div>
          </el-col>
          <el-col :span="16">
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
.introduce {
    background-color: red;
    height: 30%;
    width: 100%;
    text-align: center;
    padding: 60px 0;
}
.logo {
    height: 180px;
    width: 180px;
}
.title {
    font-size: 80px;
}
.subTitle {
    font-size: 48px;
}
</style>