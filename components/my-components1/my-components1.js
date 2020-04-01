// components/my-components.js
Component({

  options: {
    // 支持多slots
    multipleSlots: true
  },
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
  /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: String,
      value: 0,
      observer: function (newVal, oldVal) {
        // 属性值变化时执行                       
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLoadFirst: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad: function() {
      
    }
  }
})
