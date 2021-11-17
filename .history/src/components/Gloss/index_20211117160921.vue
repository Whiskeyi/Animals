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
        // window.console.log(animalsData.AnimalsDetail[0].color)
    },
    methods: {
        changeColor() {
            setInterval(function() {
                // let arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
                //                 "#FF5E99", "#828282", "#52433D", "#947A6D", "#080808", "#0C0C0C",
                //                 "#434343", "#B19693", "#434343", "#EFBB24", "#90B44B", "#373C38",
                //                 "#BDC0BA", "#BDC0BA", "#BDC0BA", "#434343","#BDC0BA", "#BDC0BA"]
                let num = Math.floor(Math.random() * animalsData.AnimalsDetail.length)
                store.commit('saveNum',num)
                document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[num].color
                // this.color = color
            }, 8000);
        }
    }
}
</script>

<style lang="scss" scoped>
#gloss {
    position: fixed;
    width: 100%;
    height: 478px;
    background: url('../../assets/gloss.png') repeat-x;
    // z-index: -8;  //暂时注释,影响调试
}
#bg {
  height: 100%;
  width: 100%;
  position: fixed;
  transition: background-color 2s ease-in; // 背景颜色切换2S过渡
  filter: blur(0.5px); // 背景高斯模糊
  // z-index: -9; //暂时注释,影响调试
}
</style>