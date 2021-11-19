<template>
  <div class="container">
    <div id="jojo">
      <div class="back-paws"></div>
      <div class="head"></div>
      <div class="face"></div>
      <div class="ears"></div>
      <div class="body"></div>
      <div class="paws"></div>
      <div class="paws2"></div>
      <div class="fur"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dog',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.container {
  /* background-color:#8C5A47;   */
  text-align:center;
  height: 200px;
  margin: 0rem;
  /* overflow: hidden; */
  padding-bottom: 50px;
}
#jojo{
  margin: 0px auto;
  position: relative;
  height:200px;
  /* width:680px; */
  width:100px;
  transform-origin:top;
  animation: jojogo 10s linear infinite;
}
@keyframes jojogo {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10vmax);
  }
  52% {
    transform: rotateY(180deg) translateX(-10vmax);
  }
  99% {
    transform: rotateY(180deg) translateX(0vmax);
  }
}
#jojo div{position:absolute;}
#jojo div::before, #jojo div::after {
  content:'';
  position:absolute;
  display:block;
}
.head {
  width:31px;
  height:55.6px;
  background-image: linear-gradient(90deg, white 5px,  #F19D2C 5px);
  border-bottom-right-radius:135px;
  /* top:117px; */
  bottom: 18px;
  right:10px;
}
.head::before {
  width: 10.8px;
  height:10.8px;
  border-bottom-right-radius:10.8px;
  background-image: radial-gradient(circle at 10px 0rem, #404041 5px, white 5px);
  bottom: 35px;
  left:30px;
}
.head::after{
  width:12.8px;
  height:0.4px;
  background-color:#8C5A47;
  bottom: 35px;
  left:18.2px;
}
.face{
  width:2.4px;
  height:2.4px;
  border-radius:50%;
  background-color:#404041;
  box-shadow: 9.6px 0 #404041;
  bottom: 65px;
  left:70px;
}
.face::before{
  width:4px;
  height:2.5px;
  border-radius:2.5px;
  background-color:#D1733A;
  box-shadow:8.6px 0 #D1733A;
  bottom: 5px;
  left:-1px;
}
.face::after{
  width: 4.4px;
  height: 4.6px;
  background-color:#F16258;
  border-radius: 0 0 4.6px 4.6px;
  top: 14px;
  left:7px;
  animation:tounge 1s infinite ease;
}
@keyframes tounge {
  50% {height:3.6px;}
}
.back-paws{
  width:101.4px;
  height:3.6px;
  background-color:#3F3856;
  border-radius:50%;
  bottom:0rem;
  left:0px;
}
.back-paws::before{
  width:10.6px;
  height:21.2px;
  border-radius:3.75rem;
  background-image: linear-gradient(#D1733A 5rem, #D9DFF1 5rem);
  left:32px;
  bottom:6px;
  transform-origin:top;
  animation: rightfoot 2s linear infinite;
}
.back-paws::after{
  width:10.6px;
  height:21.2px;
  border-radius:3.75rem;
  background-image: linear-gradient(#D1733A 5rem, #D9DFF1 5rem);
  left:73px;
  bottom:6px;
  transform-origin:top;
  animation: rightfoot 2s linear infinite;
}
.body{
  width:55.4px;
  height:31.2px;
  border-bottom-left-radius:26.4px;
  background-image: linear-gradient(#F19D2C 26px, #D1733A 26px);
  bottom:18px;
  left:4px;
}
.body::before{
  width:10px;
  height:4.4px;
  background-image:linear-gradient( 90deg, white 4.4px, #F19D2C 4.4px);
  border-bottom-left-radius:4.4px;
  left:-6px;
  animation: tail 300ms infinite ease;
}
@keyframes tail{
  50%{transform:rotate(15deg);}
}
.paws {
  width:10.6px;
  height:21.2px;
  border-radius:12px;
  background-image: linear-gradient(#F19D2C 16px, white 16px);
  left:14px;
  bottom:6px;
  transform-origin:top;
  animation: leftfoot 2s linear infinite;
}
.paws2 {
  width:10.6px;
  height:21.2px;
  border-radius:12px;
  background-image: linear-gradient(#F19D2C 16px, white 16px);
  left:59px;
  bottom:6px;
  transform-origin:top;
  animation: leftfoot 2s linear infinite;
}
@keyframes leftfoot {
  0%,
  50%,
  100% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(-25deg);
  }
  75% {
    transform: rotateZ(25deg);
  }
}
@keyframes rightfoot {
  0%,
  50%,
  100% {
    transform: rotateZ(0deg);
  }
  25% {
    transform: rotateZ(25deg);
  }
  75% {
    transform: rotateZ(-25deg);
  }
}
.ears::before{
  width:7.6px;
  height:7.6px;
  background-color:#c97c47;
  border-top-right-radius: 11.6px;
  box-shadow: 0rem -1.6px 0 1.6px #F19D2C;
  left:61px;
  bottom: -127px;
}
.ears::after{
  width:7.6px;
  height:7.6px;
  background-color:#c97c47;
  border-top-left-radius: 11.6px;
  box-shadow: 0rem -1.6px 0 1.6px #F19D2C;
  left:81px;
  bottom: -127px;
}

.fur{
  width:8px;
  height:4px;
  background-color:white;
  border-radius: 0 0 4.8px 4.8px;
  box-shadow:0.6px -2.8px white,
  6.6px 14px #F19D2C,
  6px 16.8px #F19D2C;
  bottom:58px;
  left:55px;
}
.fur::before{
  width:8px;
  height:4px;
  background-color: #F19D2C;
  border-radius:  4.8px 4.8px 0 0;
  box-shadow:0.6px -2.8px  #F19D2C;
  bottom:-21px;
  left:29px;
}
.fur::after{
  width:4px;
  height:8px;
  background-color: #F19D2C;
  border-radius:  0 8px 8px 0;
  box-shadow:3.6px -1.4px  #F19D2C;
  bottom: -14px;
  left:-41px;
}

</style>
