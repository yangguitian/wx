// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {icon:"我的收藏.png", name:"我的收藏"},
      {icon:"优惠卷.png", name:"优惠卷"},
      {icon:"个人资料.png", name:"个人资料"},
      {icon:"签到记录.png", name:"签到记录"},
      {icon:"收货地址.png", name:"收货地址"},
      {icon:"消息中心.png", name:"消息中心"},
      {icon:"发布商品.png", name:"发布商品"},
      {icon:"我的商品.png", name:"我的商品"},
      {icon:"未认证.png", name:"未认证"},
      {icon:"开通学校.png", name:"开通学校"},
      {icon:"发布求购.png", name:"发布求购"},
      {icon:"我的求购.png", name:"我的求购"}
    ],
  },
  goTosetting:function(){
    wx.navigateTo({
      url: '/pages/setting/setting',
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