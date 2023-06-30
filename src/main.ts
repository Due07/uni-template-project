import Vue from 'vue';
import App from './App.vue';
import './uni.promisify.adaptor';
import uView from 'uview-ui';
import store from './store';
import cfg from '@/common/config';

const updateManager = uni.getUpdateManager();

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  console.log('是否需要更新', res.hasUpdate);
});

updateManager.onUpdateReady(function () {
  uni.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      }
    }
  });

});

updateManager.onUpdateFailed(function (res) {
  // 新的版本下载失败
  console.error(res);
});


Vue.use(uView);
Object.assign(Vue.prototype, cfg);

Vue.config.productionTip = false;

Vue.prototype.$store = store;

const app = new (typeof App === 'function' ? App : Vue.extend(Object.assign({ mpType: 'app' }, App)))();

app.$mount();
