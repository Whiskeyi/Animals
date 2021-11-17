<template>
  <div class="habPoem">
       <el-row class="habContainer">
           <el-col class="poem" :span="8">
                <div id="content4">{{ content4 }}</div>
                <div id="content3">{{ content3 }}</div>
                <div id="content2">{{ content2 }}</div>
                <div id="content1">{{ content1 }}</div>
                <div id="author">{{ author }}</div>
                <div id="poemTitle">{{ title }}</div>
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
            title: '',
            author: '',
            content1: '',
            content2: '',
            content3: '',
            content4: '',
            food: '小虫子、菜叶、饲料',
            enemy: ''
        }
    },
    mounted() {
        this.changeInfo()
        // window.console.log(store.state.num)
    },
    methods: {
          changeInfo() {
            setInterval(function() {
                // this.IntContent = animalsData.AnimalsDetail[store.state.num].content
                // document.getElementById('IntContent').innerHTML = this.IntContent
                // // window.console.log(this.content)
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