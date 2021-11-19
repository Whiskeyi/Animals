<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="5">
            <transition name="fade">
                <div id="title" class="fadeIn">{{ name }}</div>
            </transition>
            <div id="subTitle">{{ enName }}</div>
          </el-col>
          <el-col :span="10">
              <audio id="voice" controls class="logo">
                <!-- <el-image class="logo" alt="logo" :src="require('@/icons/voice.png')"></el-image> -->
                <source :src="mediaUrl" type="audio/mpeg">
              </audio>
          </el-col>
          <el-col :span="9">
              <img class="svgIcon" :src="require('../../../icons/svg/'+svg+'.svg')">
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
            enName: 'Chicken',
            show: '1',
            mediaUrl: 'http://mrclan.com/fastdl/tfc/sound/chick.wav',
            svg: 'Bear'
        }
    },
    // mounted() {
    //     this.changeInfo()
    //     // window.console.log(store.state.num)
    // },
    // methods: {
    //       changeInfo() {
    //         setInterval(function() {
    //             this.name = animalsData.AnimalsDetail[store.state.num].name
    //             document.getElementById('title').innerHTML = this.name
    //             // window.console.log(this.name)
    //             this.enName = animalsData.AnimalsDetail[store.state.num].enName
    //             document.getElementById('subTitle').innerHTML = this.enName
    //             // window.console.log(this.enName)
    //         }, store.state.seconds);
    //     }
    // },
    destroyed() {
         document.getElementById("voice").load(); // audio load
    },
    computed: {
        nameChange() {
            return store.state.num
        }
    },
    watch: {
        nameChange: function() {
             this.name = animalsData.AnimalsDetail[store.state.num].name
            //  document.getElementById('title').innerHTML = this.name
             this.enName = animalsData.AnimalsDetail[store.state.num].enName
            //  document.getElementById('subTitle').innerHTML = this.enName
             this.mediaUrl = animalsData.AnimalsDetail[store.state.num].voice
            //  window.console.log(this.mediaUrl)
            this.svg = animalsData.AnimalsDetail[store.state.num].enName
            document.getElementById("voice").load(); // audio load
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';

.fadeIn {
    animation: all 5s ease-in;
}
.introduce {
    // background-color: wheat;;
    height: 30%;
    width: 100%;
}
.intContainer {
    padding: 15px 0;
}
#title {
    // font-size: 60px;
    font-size: 2.6vw;
    display: block;
}
#subTitle {
    // font-size: 44px;
    font-size: 2.0vw;
    display: block;
}
.logo {
    padding-top: 3.4vw;
    height: 3.0vw;
    width: 15.0vw;
}
.svgIcon {
    width: 6vw;
}
</style>