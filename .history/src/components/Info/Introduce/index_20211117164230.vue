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
            }, 8000);
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
    font-size: 72px;
}
#subTitle {
    font-size: 44px;
}
.logo {
    padding-top: 60px;
    height: 60px;
    width: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>