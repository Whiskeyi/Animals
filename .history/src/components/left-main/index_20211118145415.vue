<template>
  <div class="leftContainer">
    <el-row :gutter="20" type="flex" justify="center" v-for="(i, inx) in dataLength/3" :key="inx">
      <el-col :span="8" v-for="(item, index) in getNum(inx)" :key="index">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
        <div>{{ item.enName }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
export default {
  data() {
    return {
      data: {},
      dataLength: ''
    }
  },
  mounted() {
    this.data = animalsData
    this.dataLength = this.data.AnimalsDetail.length
  },
  methods: {
     getNum(inx){
        // window.console.log(this.data.AnimalsDetail.slice(inx, inx + 3))
        return this.data.AnimalsDetail.slice(inx, inx + 3)
      }
    }
  }
</script>

<style lang="scss" scoped>
.leftContainer {
  padding: 30px 0;
  width: 100%;
  text-align: center;
  color: #e6e6e6;
  font-size: 1.3vw;
}
.leftContainer .logo {
  width: 80px;
  height: 80px;
  padding: 40px 0;
}
 @media screen and (max-width: 1440px) { // 屏幕小于1440px样式
  .leftContainer .logo {
    height: 50px;
    width: 50px;
    padding: 30px 0;
  }
 }
</style>