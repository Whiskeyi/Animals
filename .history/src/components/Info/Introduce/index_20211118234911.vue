<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="6">
            <transition name="fade">
                <div id="title" class="fadeIn">{{ name }}</div>
            </transition>
            <div id="subTitle">{{ enName }}</div>
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
    computed: {
        nameChange() {
            return store.state.num
        }
    },
    watch: {
        nameChange: function() {
             this.name = animalsData.AnimalsDetail[store.state.num].name
             document.getElementById('title').innerHTML = this.name
             this.enName = animalsData.AnimalsDetail[store.state.num].enName
             document.getElementById('subTitle').innerHTML = this.enName
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/transition.scss';

@keyframes fadeIn
{
    0%   {opacity: 0;}
    100% {opacity: 1;}
}
.fadeIn {
    animation: fadeIn 5s;
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
    font-size: 3vw;
    display: block;
}
#subTitle {
    // font-size: 44px;
    font-size: 2.3vw;
    display: block;
}
.logo {
    padding-top: 3.5vw;
    height: 3.1vw;
    width: 3.1vw;
}

</style>