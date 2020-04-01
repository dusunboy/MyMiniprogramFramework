Component({
  lifetimes: {
    created: function () {
      // 在组件实例刚刚被创建时执行      

    },
    attached: function () {
      // 在组件实例进入页面节点树时执行      
      this.onLoad()
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  properties: {
    selected: {
      type: String,
      value: ''
    },
    color: {
      type: String,
      value: '',
    },
    selectedColor: {
      type: String,
      value: '',
    },
    isShipper: {
      type: Boolean,
      value: true,
    },
    isLogin: {
      type: Boolean,
      value: false,
    },
    list: {
      type: Object,
      value: [],
    },
  },
  options: {},
  attached() {},
  methods: {

    onLoad() {
      setTimeout(() => {
        let selectorQuery = wx.createSelectorQuery().in(this);
        selectorQuery.select('#tab-bar').boundingClientRect();
        selectorQuery.exec((res) => {
          let tabBarHeight = res[0].height;
          this.triggerEvent('switchTab', {
            index: 0,
            tabBarHeight: tabBarHeight,
          })
          this.setData({
            tabBarHeight: tabBarHeight,
          })
        })
      }, 500);
    },
    switchTab(e) {
      const data = e.currentTarget.dataset
      this.triggerEvent('switchTab', {
        index: data.index,
        tabBarHeight: this.data.tabBarHeight,
      })
    }
  }
})