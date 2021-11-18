<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="6">
              <transition name="fade">
                <div id="title">{{ name }}</div>
              </transition>
              <transition name="fade">
                <div id="subTitle">{{ enName }}</div>
              </transition>
          </el-col>
          <el-col :span="10">
              <el-image class="logo" alt="logo" :src="require('@/icons/voice.png')"></el-image>
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
            name: '鸡',
            enName: 'Chicken'
        }
    },
    mounted() {
        this.changeInfo()
        // window.console.log(store.state.num)
    },
    methods: {
          changeInfo() {
            setInterval(function() {
                this.name = animalsData.AnimalsDetail[store.state.num].name
                document.getElementById('title').innerHTML = this.name
                // window.console.log(this.name)
                this.enName = animalsData.AnimalsDetail[store.state.num].enName
                document.getElementById('subTitle').innerHTML = this.enName
                // window.console.log(this.enName)
            }, store.state.seconds);
        }
    }
}
</script>

<style lang="scss" scoped>
.introduce {
    // background-color: wheat;;
    height: 30%;
    width: 100%;
}
.intContainer {
    padding: 15px 0;
}
#title {
    font-size: 60px;
    display: block;
}
#subTitle {
    font-size: 44px;
    display: block;
}
.logo {
    padding-top: 60px;
    height: 60px;
    width: 60px;
}
fade-enter {
    opacity: 0;
}
fade-enter-to {
    opacity: 1;
}
.fade-enter-active, .fade-leave-active {
  transition: all 2.5s ease;
}
@media screen and (max-width: 960px) { // 屏幕小于960px样式
    #title {
        font-size: 32px;
        display: block;
    }
    #subTitle {
        font-size: 24px;
        display: block;
    }
    .logo {
        padding-top: 60px;
        height: 30px;
        width: 30px;
    }
}
@media screen and (min-width: 960px) and (max-width:1440px) { // 屏幕大于等于960px小于1440px样式
    #title {
      font-size: 52px;
      display: block;
      }
      #subTitle {
          font-size: 36px;
          display: block;
      }
      .logo {
          padding-top: 60px;
          height: 40px;
          width: 40px;
      }
}
</style>