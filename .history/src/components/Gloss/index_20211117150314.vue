<template>
<!-- 实现光泽效果,丰富背景颜色 -->
<div class="bg" :style="{ backgroundColor : color }">
    <div id="gloss"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            color: 'rgb(158, 122, 122)'
        }
    },
    mounted() {
        setInterval(function() {
            let arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
                            "#FF5E99", "#828282", "#52433D", "#947A6D", "#080808", "#0C0C0C",
                            "#434343", "#B19693", "#434343", "#EFBB24", "#90B44B", "#373C38",
                            "#BDC0BA", "#BDC0BA", "#BDC0BA", "#434343","#BDC0BA", "#BDC0BA"]
            let color = arrColor[Math.floor(Math.random() * arrColor.length)]
            this.color = color
        }, 3000);
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
</style>