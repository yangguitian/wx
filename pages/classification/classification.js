// pages/classification/classification.js
Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // activeKey: 0,
    groups: [],
    currentSection: {},
    currentSecName: "家用电器",
    scrollPosition: 0
  },
  /**
   * 用户点击左侧菜单的事件
   */
  onTap: function(e) {
    wx.showLoading({
      title: '加载中...',
    });
    this.setData({
      currentSecName: e.currentTarget.dataset.current,
      currentSection: cate[e.currentTarget.dataset.current],
      scrollPosition: 0
    });
    wx.hideLoading()
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
