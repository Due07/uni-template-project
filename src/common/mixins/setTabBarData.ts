
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class My extends Vue {
  // 自定义tabBar 切换失效问题
  setTabBarData() {
    const { globalData } = getApp();
    const [currentPage] = getCurrentPages<{getTabBar: Function}>();
    if (typeof currentPage.getTabBar === 'function' && currentPage.getTabBar()) {
      currentPage.getTabBar().setData({
        selected: globalData?.selectedBar ?? 0,
      });
    }
  }
}
