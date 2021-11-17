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