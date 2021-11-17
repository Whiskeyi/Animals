<template>
    <div class="fooMid">
        <el-row class="botContainer">
            <el-col :sm="16" :md="16" :lg="16">
                <!-- <el-collapse>
                    <el-collapse-item title="简介：" class="collapse"> -->
                        <div class="IntTitle">简介：</div>
                        <div id="IntContent">{{ IntContent }}</div>
                    <!-- </el-collapse-item>
                </el-collapse> -->
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
            IntContent: '在甘肃天水西山坪大地湾一期文化中，已经发现了距今8000年左右的家鸡我国甲骨文中有“鸡”字，是世界上最早养鸡的国家之一'
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
            }, store.state.seconds);
        }
    }
}
</script>

<style lang="scss" scoped>
// /deep/ .el-collapse-item__header {
//     font-weight: bold;
//     color: #fff;
//     font-size: 24px;
//     background-color: transparent;
// }
// /deep/ .el-collapse-item__content {
//     background-color: transparent !important; // 待解决
//     color:#fff;
// }
.fooMid {
    // background-color: rgb(253, 128, 128);
    height: 50%;
    width: 100%;
}
.botContainer {
    padding: 15px 0;
}
.IntTitle {
    font-size: 1.5vw;
    font-weight: bold;
    line-height: 5vh;
}
#IntContent {
    font-size: 1.4vw;
    // font-size: 22px;
    line-height: 32px;
    display: block;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
    #IntContent {
        font-size: 22px;
        line-height: 32px;
        display: block;
    }
}
</style>