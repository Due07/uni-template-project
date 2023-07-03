<template>
  <view
    class="custom-title"
    :style="[{'padding-top': `${statusBarHeight + 6}px`}]"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class CustomTitle extends Vue {
  get statusBarHeight () {
    return this.$store.getters.getStatusBarHeight;
  }
}
</script>

<style lang="scss" scoped>
.custom-title {
  color: #302929;
  font-size: 40rpx;
  position: relative;
  padding-left: 35rpx;
  font-weight: bold;
  font-family: 'emoji';
  z-index: 10;
}
</style>
