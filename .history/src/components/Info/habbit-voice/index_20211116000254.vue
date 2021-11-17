<template>
  <div class="habVoice">
       <el-row class="intContainer">
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
.habVoice {
    background-color: rgb(252, 94, 94);
    height: 30%;
}
</style>