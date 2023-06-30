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
