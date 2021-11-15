<template>
<div class="fooBottom">
     <el-row class="botContainer">
          <el-col class="poem" :span="10">
              <div class="content"></div>
              <div class="author">宋·陆游</div>
              <div class="poemTitle">《赠猫》</div>
              <div class="firstContent">裹盐迎得小狸奴，尽护山房万卷书。</div>
              <div class="lastContent">惭愧家贫策勋薄，寒无毡坐食无鱼。</div>

              <!-- <p class="foodTitle">捕食：</p>
              <div class="food">动物性高蛋白质类食品，如鱼和肉类</div>
              <p class="enemyTitle">天敌：</p>
              <div class="enemy">大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</div> -->
          </el-col>
          <el-col :span="14">
            
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
    height: 50%;
    width: 100%;
}
.botContainer {
    padding: 15px 0;
}
.poem {
    writing-mode: vertical-lr;
}
</style>