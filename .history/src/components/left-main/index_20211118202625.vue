<template>
  <div class="leftContainer">
    <el-row :gutter="20" type="flex" justify="center" v-for="(i, inx) in dataLength/3" :key="inx">
      <el-col :span="8" v-for="(item, index) in getNum(inx * 3)" :key="index">
        <div class="pro-card-wrapper">
          <div class="pro-card" @click="getInfo((i - 1) * 3 + index)">
            <div class="pic">
              <el-image class="logo" alt="logo" :src="require('../../icons/animals/bear.png')"></el-image>
            </div>
            <div class="romaji">{{ item.enName }}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
import { imgs } from '@/data.img.js';
import store from '../../store'
export default {
  data() {
    return {
      data: {},
      dataLength: '',
      imgs: []
    }
  },
  components: {
  },
  created() {
    this.imgs = imgs
    this.data = animalsData
    this.dataLength = this.data.AnimalsDetail.length
  },
  mounted() {
    window.console.log(this.imgs)
  },
  methods: {
      getNum(inx) {
        // window.console.log(this.data.AnimalsDetail.slice(inx, inx + 3))
        return this.data.AnimalsDetail.slice(inx, inx + 3)
      },
      getInfo(index) {
        store.commit('saveNum', index)
        clearInterval(window.timer)
        document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[index].color
        window.timer = setInterval(function() {
            let num = Math.floor(Math.random() * animalsData.AnimalsDetail.length)
            store.commit('saveNum',num)
            document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[num].color
        }, store.state.seconds);
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/flip.scss";
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