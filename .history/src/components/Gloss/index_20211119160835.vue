<template>
<!-- 实现光泽效果,丰富背景颜色 -->
<div id="bg" :style="{ backgroundColor : color }">
    <div id="gloss"></div>
</div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
import store from '../../store'

export default {
    data() {
        return {
            color: 'rgb(158, 122, 122)'
        }
    },
    mounted() {
        this.changeColor()
        let num = Math.floor(Math.random() * animalsData.AnimalsDetail.length)
        store.commit('saveNum',num)
        document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[num].color
    },
    methods: {
        changeColor() {
            window.timer = setInterval(function() {
                // let arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
                //                 "#FF5E99", "#828282", "#52433D", "#947A6D", "#080808", "#0C0C0C",
                //                 "#434343", "#B19693", "#434343", "#EFBB24", "#90B44B", "#373C38",
                //                 "#BDC0BA", "#BDC0BA", "#BDC0BA", "#434343","#BDC0BA", "#BDC0BA"]
                let num = Math.floor(Math.random() * animalsData.AnimalsDetail.length)
                store.commit('saveNum',num)
                document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[num].color
                // this.color = color
            }, store.state.seconds);
        }
    }
}
</script>

<style lang="scss">
@keyframes fadeIn
{
    0%  {opacity: 0;}
    100%  {opacity: 1;}
}
body {
  font-family: ZhanK;
}
#bg {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: background-color 2s ease-in; // 背景颜色切换2S过渡
  filter: blur(1px); // 背景高斯模糊
  // z-index: -9; //暂时注释,影响调试
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background-color: rgba(250, 250, 250, 0.1);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(250, 250, 250, 0.1);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb{
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .1);
    background-color: #c8c8c8;
  }
  ::-moz-selection {
    background: #000;
    color: #fafafa;
  }
  ::selection {
    background: #000;
    color: #fafafa;
  }
</style>
<style lang="scss" scoped>
#gloss {
    position: fixed;
    width: 100%;
    height: 478px;
    background: url('../../assets/gloss.png') repeat-x;
    // z-index: -8;  //暂时注释,影响调试
}
</style>