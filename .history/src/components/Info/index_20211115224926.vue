<template>
  <div class="infoContainer">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.infoContainer {
    float: left;
    z-index: 10000;
    width: 70%;
    height: 80%;
    margin: 26px 0 0 16px;
    background-color: #fff;
}
.infoContainer logo {
    position: absolute;
}
@media screen and (max-width: 1024px) { // 屏幕小于1024px样式
  .infoContainer {
    float: left;
    z-index: 10000;
    width: 60%;
    height: 80%;
    margin: 26px 0 0 16px;
    background-color: #fff;
}
}
</style>