<template>
  <div class="habVoice">
       <el-row class="habContainer">
          <el-col class="habContent" :span="16">
              <p class="foodTitle">捕食：动物性高蛋白质类食品，如鱼和肉类</p>
              <p class="enemyTitle">天敌：大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</p>
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
    // background-color: rgb(252, 94, 94);
    height: 30%;
    text-align: center;
}
.habContainer {
    padding: 15px 0;
}
.habContent p {
    font-size: 20px;
    text-align: left;
}
</style>