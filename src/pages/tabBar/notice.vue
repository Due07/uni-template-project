<template>
  <div class="notice"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Notice extends Vue {
  onLoad() {
    // uni.hideTabBar();
  }
  mounted() {
    // console.log(this.$store.dispatch('user/getLoginCode', '123'));
  }

}
</script>

<style lang="scss">
</style>
