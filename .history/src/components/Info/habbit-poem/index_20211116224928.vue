<template>
  <div class="habPoem">
       <el-row class="habContainer">
           <el-col class="poem" :md="12" :lg="12" :xl="8">
                <div class="content">寒无毡坐食无鱼</div>
                <div class="content">惭愧家贫策勋薄</div>
                <div class="content">尽护山房万卷书</div>
                <div class="content">裹盐迎得小狸奴</div>
                <div class="author">宋·陆游</div>
                <div class="poemTitle">《赠猫》</div>
            </el-col>
            <el-col class="habContent" :md="12" :lg="12" :xl="8">
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
.habPoem {
    // background-color: rgb(252, 94, 94);
    height: 30%;
}
.poem {
    writing-mode: vertical-lr;
    font-size: 22px;
    .poemTitle {
        font-weight: bold;
    }
    .content {
        letter-spacing: 15px;
    }
}
.habContainer {
    padding: 15px 0;
}
.habContent p {
    font-size: 20px;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
    .poem {
        writing-mode: vertical-lr;
        font-size: 22px;
        .poemTitle {
            font-weight: bold;
        }
        .content {
            letter-spacing: 10px;
        }
    }
}
</style>