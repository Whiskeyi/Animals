<template>
  <div class="leftContainer">
    <el-row :gutter="20" type="flex" justify="center" v-for="(i, inx) in dataLength/3" :key="inx">
      <el-col :span="8" v-for="(item, index) in getNum(inx * 3)" :key="index">
        <div class="pro-card-wrapper" style="cursor: pointer;" @click="throttle(getInfo((i - 1) * 3 + index),8000)">
          <div class="pro-card">
            <div class="pic">
              <el-image class="logo" alt="logo" :src="require('../../icons/animals/'+imgs[(i - 1) * 3 + index].img+'.png')"></el-image>
              <!-- <div class="name">123</div> -->
            </div>
            <!-- <div>
              <div class="romaji">123</div>
            </div> -->
          </div>
          <div class="word">{{ item.enName }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
// import '../../data/imgs';
import store from '../../store'
export default {
  data() {
    return {
      data: {},
      dataLength: '',
      imgs: [],
      valid: false
    }
  },
  components: {
  },
  created() {
    var imgs = [ // 引入本地json文件bug解决
          {img: 'chicken'},
          {img: 'tiger'},
          {img: 'frog'},
          {img: 'bird'},
          {img: 'turtle'},
          {img: 'monkey'},
          {img: 'lion'},
          {img: 'elephant'},
          {img: 'horse'},
          {img: 'fish'},
          {img: 'dog'},
          {img: 'mouse'},
          {img: 'cat'},
          {img: 'pig'},
          {img: 'wolf'},
          {img: 'bee'},
          {img: 'snake'},
          {img: 'duck'},
          {img: 'sheep'},
          {img: 'cow'},
          {img: 'dolphin'},
          {img: 'bear'},
          {img: 'fox'},
          {img: 'rabbit'},
        ]
    this.imgs = imgs
    this.data = animalsData
    this.dataLength = this.data.AnimalsDetail.length
  },
  mounted() {
    // window.console.log(this.imgs)
  },
  methods: {
      getNum(inx) {
        // window.console.log(this.data.AnimalsDetail.slice(inx, inx + 3))
        return this.data.AnimalsDetail.slice(inx, inx + 3)
      },
      getInfo(index) {
        store.commit('saveNum', index)
        // 触发淡出动画
        document.getElementById('infoContainer').style.transition="fadeIn 5s ease"
        clearInterval(window.timer)
        document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[index].color
        window.timer = setInterval(function() {
            let num = Math.floor(Math.random() * animalsData.AnimalsDetail.length)
            store.commit('saveNum',num)
            document.getElementById('bg').style.backgroundColor = animalsData.AnimalsDetail[num].color
        }, store.state.seconds);
        // window.console.log('throttle') // 测试节流
      },
      // 节流throttle 处理频繁点击click事件
      throttle(fn, delay) {
          return function() {
            var throttle
            this.valid = false
            clearTimeout(throttle)
            throttle = setTimeout(() => {
              fn()
              this.valid = true;
            }, delay)
          }
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
  width: 70px;
  height: 70px;
  padding: 50px 0;
}
// .name {
//    width: 70px;
//    height: 70px;
//    position: absolute;
// }
 @media screen and (max-width: 1024px) { // 屏幕小于1024px样式
  .leftContainer .logo {
    height: 40px;
    width: 40px;
    padding: 30px 0;
  }
 }
</style>