<template>
  <div class="habVoice">
       <el-row class="intContainer">
          <el-col :span="12">
              <div class="food">动物性高蛋白质类食品，如鱼和肉类</div>
              <div class="enemy">大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</div>
          </el-col>
          <el-col :span="12">
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