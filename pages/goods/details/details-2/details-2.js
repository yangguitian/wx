// pages/goods/details/details-1/details-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 2,
    detailObj:{},
    index:null,
    // 是否收藏
    isCollected:false
  },
  handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })
    //提示用户
    wx.showToast({
        title: isCollected ? '收藏成功' : '取消收藏',
        icon:'success'
    })
  },
  tohome:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})