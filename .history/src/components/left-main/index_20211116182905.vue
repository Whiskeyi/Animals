<template>
  <div class="leftContainer">
    <el-row :gutter="20" type="flex" justify="center" v-model="data">
      <el-col :span="8">
             {{ AnimalsDetail[0].img }}
        <!-- <el-image class="logo" alt="logo" :src="require(AnimalsDetail[0].img)"></el-image> -->
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
      <el-col :span="8">
        <el-image class="logo" alt="logo" :src="require('@/icons/animals/cat.png')"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import data from '@/data/Animals.json'
export default {
  data() {
    return {
      data
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.leftContainer {
  padding: 30px 0;
  width: 100%;
  text-align: center;
}
.leftContainer .logo {
  width: 110px;
  height: 110px;
  padding: 20px 0;
}
 @media screen and (max-width: 1440px) { // 屏幕小于1440px样式
  .leftContainer .logo {
    height: 80px;
    width: 80px;
    padding: 15px 0;
  }
 }
</style>