<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="6">
              <div class="title">猫</div>
              <div class="subTitle">Cat</div>
          </el-col>
          <el-col>
            <el-image class="logo" alt="logo" :src="require('@/icons/voice.png')"></el-image>
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
    // background-color: red;
    height: 30%;
    width: 100%;
}
.intContainer {
    padding: 15px 0;
}
.logo {
    height: 160px;
    width: 160px;
}
.title {
    font-size: 72px;
}
.subTitle {
    font-size: 44px;
}
.logo {
    padding-top: 60px;
    height: 70px;
    width: 70px;
}
</style>