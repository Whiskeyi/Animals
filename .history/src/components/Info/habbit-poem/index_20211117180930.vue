<template>
  <div class="habPoem">
       <el-row class="habContainer">
           <el-col class="poem" :span="8">
                <div id="content4" class="content">{{ content4 }}</div>
                <div id="content3" class="content">{{ content3 }}</div>
                <div id="content2" class="content">{{ content2 }}</div>
                <div id="content1" class="content">{{ content1 }}</div>
                <div id="author">{{ author }}</div>
                <div id="poemTitle">{{ title }}</div>
            </el-col>
            <el-col class="habContent" :span="10">
              <p class="foodTitle">捕食：{{ food }}</p>
              <p class="enemyTitle">天敌：{{ enemy }}</p>
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
            title: '《咏鸡》',
            author: '宋·缪鉴',
            content1: '数载书窗伴读鸣',
            content2: '群中刚雉羽毛新',
            content3: '今朝命试牛刀手',
            content4: '望断函关夜度人',
            food: '小虫子、菜叶、饲料',
            enemy: '黄鼠狼、老鹰、狐狸'
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