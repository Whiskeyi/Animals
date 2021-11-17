<template>
    <div class="fooMid">
        <el-row class="botContainer">
            <el-col :sm="16" :md="16" :lg="16">
                <div id="IntTitle">简介：</div>
                <div id="IntContent">猫科动物，分家猫、野猫，是全世界家庭中较为广泛的宠物。家猫的祖先据推测是起源于古埃及的沙漠猫，波斯的波斯猫，已经被人类驯化了3500年。</div>
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
.fooMid {
    // background-color: rgb(253, 128, 128);
    height: 50%;
    width: 100%;
}
.botContainer {
    padding: 15px 0;
}
#IntTitle {
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
}
#IntContent {
    font-size: 22px;
    line-height: 32px;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
    #IntContent {
        font-size: 22px;
        line-height: 32px;
    }
}
</style>