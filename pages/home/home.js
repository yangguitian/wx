// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: [
      {icon:"数码产品.png", name:"数码产品", goods:"digital/digital"},
      {icon:"书籍教材.png", name:"书籍教材", goods:"books/books"},
      {icon:"衣鞋帽伞.png", name:"衣鞋帽伞", goods:"clothes/clothes"},
      {icon:"体育运动.png", name:"体育运动", goods:"sports/sports"},
      {icon:"家用电器.png", name:"家用电器", goods:"device/device"},
      {icon:"手工设计.png", name:"手工设计", goods:"devise/devise"},
      {icon:"日常用品.png", name:"日常用品", goods:"articles/articles"},
      {icon:"代步工具.png", name:"代步工具", goods:"transportation/transportation"}
    ],
    goods:[
      { pic:"电动车1.png", text:"小牛N1锂电电动车 八成新", price:"4700", url:"details-3/details-3"},
      { pic:"篮球1.png", text:"篮球 翻毛皮篮球", price:"40.00", url:"details-2/details-2"},
      { pic:"内存条2.jpg", text:"金士顿 海盗船 芝奇 DDR3 三代内存条 4G ", price:"179", url:"details-4/details-4"},
      { pic:"平板1.png", text:"ipad 2017 32g 苹果平板电脑 ios系统", price:"1690", url:"details-1/details-1"},
      { pic:"手机1.jpg", text:"多普达S1 搭载了全新的windows mobile 6.0操作系统", price:"1460"},
    ]
  },
  todynamic:function(){
    wx.switchTab({
      url: '/pages/dynamic/dynamic',
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