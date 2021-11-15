<template>
  <div id="app">
    <!-- 入口 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {  // 去除白边
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: relative;
}
.orgs-container::-webkit-scrollbar {    /*滚动条整体样式*/
        width: 10px;                        /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .orgs-container::-webkit-scrollbar-thumb {  /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #ebebeb;
    }
    .orgs-container::-webkit-scrollbar-track {  /*滚动条里面轨道*/
        /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
        border-radius: 10px;
        background: #fff;
    }
</style>
