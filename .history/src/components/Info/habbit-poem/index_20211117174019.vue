<template>
  <div class="habPoem">
       <el-row class="habContainer">
           <el-col class="poem" :span="8">
                <div id="content4">寒无毡坐食无鱼</div>
                <div id="content3">惭愧家贫策勋薄</div>
                <div id="content2">尽护山房万卷书</div>
                <div id="content1">裹盐迎得小狸奴</div>
                <div id="author">宋·陆游</div>
                <div id="poemTitle">《赠猫》</div>
            </el-col>
            <el-col class="habContent" :span="10">
              <p class="foodTitle">捕食：动物性高蛋白质类食品，如鱼和肉类</p>
              <p class="enemyTitle">天敌：大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</p>
            </el-col>
      </el-row>
  </div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
import store from '../../../store'
export default {
     data() {
        return {
            IntContent: '在甘肃天水西山坪大地湾一期文化中，已经发现了距今8000年左右的家鸡我国甲骨文中有“鸡”字，是世界上最早养鸡的国家之一'
        }
    },
    mounted() {
        this.changeInfo()
        // window.console.log(store.state.num)
    },
    methods: {
          changeInfo() {
            setInterval(function() {
                this.IntContent = animalsData.AnimalsDetail[store.state.num].content
                document.getElementById('IntContent').innerHTML = this.IntContent
                // window.console.log(this.content)
            }, 8000);
        }
    }
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
    #poemTitle {
        font-weight: bold;
    }
    #content {
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
        #poemTitle {
            font-weight: bold;
        }
        #content {
            letter-spacing: 10px;
        }
    }
}
</style>