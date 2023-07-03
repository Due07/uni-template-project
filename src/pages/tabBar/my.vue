<template>
  <view class="my-container">
    <image
      class="container-bg"
      :src="`../../static/image/tabBar/my/bg.jpg`"
      mode="widthFix"
    ></image>
    <CustomTitle>
      <text>我的</text>
    </CustomTitle>
  </view>
</template>

<script lang="ts">
import CustomTitle from '@/components/CustomTitle/index.vue';
import { Component, Mixins } from 'vue-property-decorator';
import setTabBarData from '@/common/mixins/setTabBarData';
@Component({
  components: {
    CustomTitle,
  },
})
export default class My extends Mixins(setTabBarData) {
  get imgUrl() {
    return this.$IMAGE_URL;
  }

  mounted() {
    // console.log(CustomTitle);
    // console.log(getApp().globalData);
  }
  onShow () {
    // 修复自定义tabBar 问题
    this.setTabBarData();
  }
}
</script>

<style lang="scss">
.my-container {
  position: relative;
  width: 100%;
  // height: 100vh;
  .container-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>
