<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="5">
              <div class="title">猫</div>
              <div class="subTitle">Cat</div>
          </el-col>
          <el-col :span="19">
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
    padding-top: 100px;
    height: 80px;
    width: 80px;
}
</style>