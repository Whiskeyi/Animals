<template>
<div>
   <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <line class="mark" x1="0" y1="0" x2="0" y2="0" fill="none" stroke="#5BB4D8" stroke-miterlimit="10" stroke-linecap="none" stroke-width="12"/>
    </defs>
    <g class="container1"/>
    <g class="container2"/>
   </svg>
  <script src='../utils/TweenMax.min.js'></script>
  <script  src="../utils/index.js"></script>
  <div style="text-align:center;clear:both">
  <!-- <script src="/statics.js" type="text/javascript"></script> -->
  </div>
  </div>
</template>

<script>

export default {
    name: 'load'
}
</script>

<style lang="scss" scoped>
@import '../styles/index.scss';
body {
 background-color: #FFFCF9;
 overflow: hidden;
 text-align:center;

}
svg {
 width: 100%;
 height: 100%;
 visibility: hidden;

}
</style>>
