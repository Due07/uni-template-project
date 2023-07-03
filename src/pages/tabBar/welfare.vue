<template>
  <div class="welfare"></div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import setTabBarData from '@/common/mixins/setTabBarData';

@Component({})
export default class Welfare extends Mixins(setTabBarData) {
  // onLoad() {},
  onShow () {
    // 修复自定义tabBar 问题
    this.setTabBarData();
  }
}
</script>

<style lang="scss">
</style>
