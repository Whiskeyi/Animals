<template>
  <div class="introduce">
      <el-row class="intContainer">
          <el-col :span="6">
              <div class="title">猫{{ Name }}</div>
              <div class="subTitle">Cat{{ enName }}</div>
          </el-col>
          <el-col :span="10">
              <el-image class="logo" alt="logo" :src="require('@/icons/voice.png')"></el-image>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import store from '../../../store'
export default {
    data() {
        return {
            Name: '',
            enName: ''
        }
    },
    mounted() {
        this.changeInfo()
        window.console.log(store.state.num)
    },
    methods: {
          changeInfo() {
            setInterval(function() {
                this.Name = store.state.num
                this.enName = store.state.num
            }, 8000);
        }
    }
}
</script>

<style lang="scss" scoped>
.introduce {
    // background-color: wheat;;
    height: 30%;
    width: 100%;
}
.intContainer {
    padding: 15px 0;
}
.title {
    font-size: 72px;
}
.subTitle {
    font-size: 44px;
}
.logo {
    padding-top: 60px;
    height: 60px;
    width: 60px;
}
</style>