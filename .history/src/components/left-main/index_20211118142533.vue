<template>
  <div class="leftContainer">
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
        <div>123</div>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center" v-for="AnimalsDetail in data" :key="AnimalsDetail.enName">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/chicken.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/tiger.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/frog.png')"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const animalsData = require('@/data/Animals.json')
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.data = animalsData
  }
}
</script>

<style lang="scss" scoped>
.leftContainer {
  padding: 30px 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 1.5vw;
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