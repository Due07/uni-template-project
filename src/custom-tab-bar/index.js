/* eslint-disable */
Component({
  data: {
    selected: 0,
    // color: '#7A7E83',
    // selectedColor: '#3cc51f',
    list: [
      {
        // 'name': 'zz',
        'pagePath': 'pages/tabBar/notice',
        'iconPath': '../static/image/tabBar/notice.png',
        'selectedIconPath': '../static/image/tabBar/notice-select.png'
        // 'text': '官方'
      },
      {
        // 'name': 'za',
        'pagePath': 'pages/tabBar/strategy',
        'iconPath': '../static/image/tabBar/strategy.png',
        'selectedIconPath': '../static/image/tabBar/strategy-select.png',
        'class': 'strategy'
        // 'text': '攻略'
      },
      {
        // 'name': 'zb',
        'pagePath': 'pages/tabBar/release',
        'iconPath': '../static/image/tabBar/release.png',
        'selectedIconPath': '../static/image/tabBar/release.png',
        'class': 'reslease'
        // 'text': '发布'
      },
      {
        // 'name': 'zzz',
        'pagePath': 'pages/tabBar/welfare',
        'iconPath': '../static/image/tabBar/welfare.png',
        'selectedIconPath': '../static/image/tabBar/welfare-select.png'
        // 'text': '福利'
      },
      {
        // 'name': 'zv',
        'pagePath': 'pages/tabBar/my',
        'iconPath': '../static/image/tabBar/my.png',
        'selectedIconPath': '../static/image/tabBar/my-select.png'
        // 'text': '我的'
      }
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      console.log(data);
      const url = data.path;
      wx.switchTab({url});
      this.setData({
        selected: data.index
      });
    }
  }
});
