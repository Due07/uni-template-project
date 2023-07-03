/* eslint-disable */
const app = getApp();
Component({
  // options: {
  //   styleIsolation: 'shared',
  // },
  data: {
    selected: app.globalData.selectedBar,
    // color: '#7A7E83',
    // selectedColor: '#3cc51f',
    list: [
      {
        'name': 'notice',
        'pagePath': '/pages/tabBar/notice',
        'iconPath': '../static/image/tabBar/notice.png',
        'selectedIconPath': '../static/image/tabBar/notice-select.png'
        // 'text': '官方'
      },
      {
        'name': 'strategy',
        'pagePath': '/pages/tabBar/strategy',
        'iconPath': '../static/image/tabBar/strategy.png',
        'selectedIconPath': '../static/image/tabBar/strategy-select.png',
        'class': 'strategy'
        // 'text': '攻略'
      },
      {
        'name': 'release',
        'pagePath': '/pages/tabBar/release',
        'iconPath': '../static/image/tabBar/release.png',
        'selectedIconPath': '../static/image/tabBar/release.png',
        'class': 'reslease'
        // 'text': '发布'
      },
      {
        'name': 'welfare',
        'pagePath': '/pages/tabBar/welfare',
        'iconPath': '../static/image/tabBar/welfare.png',
        'selectedIconPath': '../static/image/tabBar/welfare-select.png'
        // 'text': '福利'
      },
      {
        'name': 'my',
        'pagePath': '/pages/tabBar/my',
        'iconPath': '../static/image/tabBar/my.png',
        'selectedIconPath': '../static/image/tabBar/my-select.png'
        // 'text': '我的'
      }
    ]
  },
  ready() {
    const [currentPages] = getCurrentPages();
    const findIndex = this.data.list.findIndex((item) => item.pagePath === currentPages.$page.fullPath);
    this.setData({
      selected: findIndex,
    })
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      // console.log(data, getCurrentPages(), app);
      const url = data.path;
      app.globalData.selectedBar = data.index;

      this.setData({
        selected: data.index
      }, function () {
        wx.switchTab({ url });
      });
    }
  }
});
