<template>
<div class="fooBottom">
     <el-row class="botContainer">
          <el-col class="poem" :span="10">
              <p class="foodTitle">捕食：</p>
              <div class="food">动物性高蛋白质类食品，如鱼和肉类</div>
              <p class="enemyTitle">天敌：</p>
              <div class="enemy">大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</div>
          </el-col>
          <el-col :span="14">
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
.fooBottom {
    background-color: rgb(253, 128, 128);
    height: 30%;
    width: 100%;
}
</style>