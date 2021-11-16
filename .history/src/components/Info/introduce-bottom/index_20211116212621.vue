<template>
    <div class="fooBottom">
        <el-row class="botContainer">
            <el-col class="poem" :span="8">
                <div class="content">寒无毡坐食无鱼</div>
                <div class="content">惭愧家贫策勋薄</div>
                <div class="content">尽护山房万卷书</div>
                <div class="content">裹盐迎得小狸奴</div>
                <div class="author">宋·陆游</div>
                <div class="poemTitle">《赠猫》</div>
                <!-- <p class="foodTitle">捕食：</p>
                <div class="food">动物性高蛋白质类食品，如鱼和肉类</div>
                <p class="enemyTitle">天敌：</p>
                <div class="enemy">大型肉食性动物如蟒蛇、老虎、狮子以及野狸子等</div> -->
            </el-col>
            <el-col :span="11">
                <div class="IntTitle">简介：</div>
                <div class="IntContent">猫科动物，分家猫、野猫，是全世界家庭中较为广泛的宠物。家猫的祖先据推测是起源于古埃及的沙漠猫，波斯的波斯猫，已经被人类驯化了3500年。</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.fooBottom {
    // background-color: rgb(253, 128, 128);
    height: 50%;
    width: 100%;
}
.botContainer {
    padding: 15px 0;
}
.poem {
    writing-mode: vertical-lr;
    font-size: 22px;
    .poemTitle {
        font-weight: bold;
    }
    .content {
        letter-spacing: 15px;
    }
}
.IntTitle {
    font-size: 24px;
    font-weight: bold;
}
.IntContent {
    font-size: 22px;
    line-height: 40px;
}
@media screen and (max-width: 1440px) { // 屏幕小于1440px样式
    .poem {
    writing-mode: vertical-lr;
    font-size: 22px;
    .poemTitle {
        font-weight: bold;
    }
    .content {
        letter-spacing: 15px;
    }
}
}
</style>