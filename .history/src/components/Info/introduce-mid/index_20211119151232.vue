<template>
    <div class="fooMid">
        <el-row class="botContainer">
            <el-col :sm="12" :md="12" :lg="12">
                <!-- <el-collapse>
                    <el-collapse-item title="简介：" class="collapse"> -->
                        <div class="IntTitle">简介：</div>
                        <div id="IntContent">{{ IntContent }}</div>
                    <!-- </el-collapse-item>
                </el-collapse> -->
            </el-col>
            <el-col :span="8">
                <div class="getColor">
                    <p>拾色：</p>
                    <el-color-picker v-model="penColor"></el-color-picker>
                    <p>文件命名：</p>
                    <input class="colorInput" v-model="fileName" placeholder="请输入图片名称">
                </div>
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
            IntContent: '在甘肃天水西山坪大地湾一期文化中，已经发现了距今8000年左右的家鸡我国甲骨文中有“鸡”字，是世界上最早养鸡的国家之一',
            fileName: '',
            penColor: ''
        }
    },
    // mounted() {
    //     this.changeInfo()
    //     // window.console.log(store.state.num)
    // },
    // methods: {
    //     //   changeInfo() {
    //     //     setInterval(function() {
    //     //         this.IntContent = animalsData.AnimalsDetail[store.state.num].content
    //     //         document.getElementById('IntContent').innerHTML = this.IntContent
    //     //         // window.console.log(this.content)
    //     //     }, store.state.seconds);
    //     // }
    // },
    computed: {
        content() {
            return store.state.num
        }
    },
    watch: {
        content: function() {
            this.IntContent = animalsData.AnimalsDetail[store.state.num].content
            // document.getElementById('IntContent').innerHTML = this.IntContent
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
    font-size: 1.3vw;
    font-weight: bold;
    line-height: 5.2vh;
}
#IntContent {
    font-size: 1.2vw;
    // font-size: 22px;
    line-height: 4.8vh;
    display: block;
}
.getColor {
    font-size: 1.1vw;
    font-weight: bold;
    padding: 0 2vw;
}
.colorInput {
    width: 5vw;
    height: 1.2vw;
    background-color: transparent;
    border: 2px solid white;
}
// @media screen and (max-width: 1440px) { // 屏幕小于1440px样式
//     #IntContent {
//         font-size: 22px;
//         line-height: 32px;
//         display: block;
//     }
// }
</style>