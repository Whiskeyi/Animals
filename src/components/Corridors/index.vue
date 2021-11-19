<template>
  <el-card>
    <div
        ref="slider"
        class="items"
        @mousedown="moveStart"
        @mouseup="moveStop"
        @mousemove="move"
    >
      <div
          v-for="(i, index) in lists"
          :key="i"
          :class="setClass()"
      >
        <el-image
            :src="require('../../data/img/'+imgs[index].img+'.png')"
        ></el-image>
      </div>
    </div>
    <el-button
        class="button"
        icon="el-icon-back"
        circle
        type="primary"
        @click="backHomePage"
    />
  </el-card>

</template>

<script>
const animalsData = require('@/data/Animals.json')
export default {
  name: "corridors",
  data() {
    return{
      lists: 24,
      isMouseDown: false, //记录鼠标是否按下
      startX: null, //按下时位置的x坐标
      scrollLeft: 600, //记录视口相对于items最左侧已经滚过的距离

      timer: null, // 记录当前计时器的intervalID
      isMove: true, // 当前是否需要移动

      data: {},
     imgs: [
       {img: 'alligats-removebg-preview'},
       {img: 'bats-removebg-preview'},
       {img: 'beria-removebg-preview'},
       {img: 'bird_044_1-removebg-preview'},
       {img: 'canarys-removebg-preview'},
       {img: 'chimps-removebg-preview'},
       {img: 'clownfish-removebg-preview'},
       {img: 'eagle01-removebg-preview'},
       {img: 'elefant-removebg-preview'},
       {img: 'lions-removebg-preview'},
       {img: 'goats-removebg-preview'},
       {img: 'malaysian_cobra-removebg-preview'},
       {img: 'porcupine-removebg-preview'},
       {img: 'mandrel-removebg-preview'},
       {img: 'rhino-removebg-preview'},
       {img: 'pu-removebg-preview'},
       {img: 'sandcats-removebg-preview'},
       {img: 'sharks-removebg-preview'},
       {img: 'sharkss-removebg-preview'},
       {img: 'stalion-removebg-preview'},
       {img: 'tigers-removebg-preview'},
       {img: 'Tortoise-removebg-preview'},
       {img: 'Wolfs-removebg-preview'},
       {img: 'zebras-removebg-preview'},
    ]
    }
  },
  computed: {

  },
  // created () {
  //   this.play(this.isMove)
  // },
  mounted() {
    this.data = animalsData
    this.play(this.isMove)
  },
  methods: {
    setClass(i){
      return 'item' + ' ' + 'item'+ i ;
    },
    moveStart(e) {
      this.play(this.isMove);
      this.isMouseDown = true;
      this.$refs.slider.classList.add('active');
      this.startX = e.pageX - this.$refs.slider.offsetLeft;
      this.scrollLeft = this.$refs.slider.scrollLeft;
    },
    moveStop(e) {
      this.isMouseDown = false;
      this.$refs.slider.classList.remove('active');
    },
    move(e) {
      if (!this.isMouseDown) {
        return;
      }
      e.preventDefault();
      const x = e.pageX - this.$refs.slider.offsetLeft;
      const walk = (x - this.startX) * 2;
      this.$refs.slider.scrollLeft = this.scrollLeft - walk;
    },
    autoPlay (e) {
      let n = 0;
      n++;
      this.$refs.slider.scrollLeft = this.scrollLeft + 2;
      this.scrollLeft = this.scrollLeft + 2;
      if(this.scrollLeft >=  this.$refs.slider.scrollWidth - 1280-1000) {
        this.scrollLeft = 1200;
      }
    },
    play(ifMove) {
      console.log("ifMove = ", ifMove);
      this.isMove = !this.isMove; // 下一次需不需要移动就直接取反
      if(ifMove) {
        this.timer = setInterval(this.autoPlay, 10);
      } else {
        clearInterval(this.timer);
      }
      console.log("nowTimer = ", this.timer);
    },

    getValue() {
      const vo = this.data.AnimalsDetail;
      return  vo[Math.floor((Math.random() * vo.length))].img;
    },
    backHomePage() {
      this.$router.push({
        name: 'home'
      })
    }
  },
}
</script>

<style scoped>



/*隐藏滚动条*/
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
el-card{
  width: 80vw;
  height: 80vh;
}

.items {
  margin: auto 0;
  /*background-color: #2AD8FF;*/
  height: calc(100vh - 210px);
  padding: 80px 40px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  position: relative;
  /*background: rgba(255,255,255,0.1);*/
  font-size: 0;
  perspective: 500px;
  scrollbar-width: none; /* Firefox  隐藏滚动条*/
  -ms-overflow-style: none/* IE 10+ 隐藏滚动条 */
}
/* 动画代码 */
@keyframes example {
  0% { background: dodgerblue;}
  10% { background: goldenrod; }
  20% { background: paleturquoise; }
  30% { background: gold; }
  40% { background: cadetblue; }
  50% { background: tomato; }
  60% { background: lightcoral; }
  70% { background: darkslateblue; }
  80% { background: rebeccapurple;}
  90% { background: #3BC1AC;}
  100% { background: #ACD400;}
}

/*@keyframes examples {*/
/*  0% {  left:0px}*/
/*  10% {  left:10px}*/
/*  20% {  left:20px}*/
/*  30% {  left:30px}*/
/*  40% {  left:40px}*/
/*  50% {  left:50px}*/
/*  60% {  left:60px}*/
/*  70% {  left:70px}*/
/*  80% {  left:80px}*/
/*  90% {  left:90px}*/
/*  100% {  left:100px}*/
/*}*/

 /*应用动画的元素*/

/*.items {*/
/*  animation-name: example;*/
/*  animation-duration: 10s;*/
/*  animation-iteration-count: infinite;*/
/*}*/

/*.item {*/
/*  animation-name: examples;*/
/*  animation-duration: 10s;*/
/*  animation-iteration-count: infinite;*/
/*}*/


.items.active {
  background: rgba(255,255,255,0.3);
  cursor: grabbing;
  /*cursor: -webkit-grabbing;*/
  transform: scale(1);
}

.item {
  width:400px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color:rgba(0,0,0,0.15);
  border: 6px;
  box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
}

.item:nth-child(10n+1) { border-color: dodgerblue;}
.item:nth-child(10n+2) { border-color: goldenrod;}
.item:nth-child(10n+3) { border-color: paleturquoise;}
.item:nth-child(10n+4) { border-color: gold;}
.item:nth-child(10n+5) { border-color: cadetblue;}
.item:nth-child(10n+6) { border-color: tomato;}
.item:nth-child(10n+7) { border-color: lightcoral;}
.item:nth-child(10n+8) { border-color: darkslateblue;}
.item:nth-child(10n+9) { border-color: rebeccapurple;}
.item:nth-child(10n+10) { border-color: #3BC1AC;}


.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }

.wrap {
  width: auto;
  border:2px solid green;
  height: 100%;
}
.button{
  position: absolute;
  left: 50%;
  bottom: 20px;
}
</style>