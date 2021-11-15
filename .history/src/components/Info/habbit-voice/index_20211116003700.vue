<template>
  <div class="habVoice">
       <el-row class="habContainer">
          <el-col class="habContent" :span="16">
              <p class="foodTitle">捕食：</p>
              <div class="food">动物性高蛋白质类食品，如鱼和肉类</div>
              <p class="enemyTitle">天敌：</p>
              <div class="enemy">大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</div>
          </el-col>
          <el-col :span="8">
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
.habVoice {
    background-color: rgb(252, 94, 94);
    height: 30%;
    text-align: center;
}
.habContainer {
    padding: 15px 0;
}
.habContent p {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
}
.habContent div {
    font-size: 20px;
    text-align: left;
}
.logo {
    height: 110px;
    width: 110px;
}
</style>