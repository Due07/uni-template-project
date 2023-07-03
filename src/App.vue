<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mpType: 'app',
  onLaunch() {
    console.log('App Launch');
    // uni.hideTabBar({animation: false});
    // wx 添加finally函数
    Promise.prototype.finally = function(callback: any){
      return this.then(
        (value) => Promise.resolve(callback()).then(() => value),
        (rej) => Promise.resolve(callback()).then(() => rej),
      );
    };
    // 获取系统配置刘海高度
    this.$store.dispatch('getStatusBarHeight');
  },
  globalData: {
    selectedBar: 0,
  },
  onShow() {
    console.log('App Show');
  },
  onHide() {
    console.log('App Hide');
  },
});
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
/*每个页面公共css */
</style>
