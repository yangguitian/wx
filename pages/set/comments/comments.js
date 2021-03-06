// pages/set/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu1:[
      {name:"全部"},
      {name:"好评"},
      {name:"中评"},
      {name:"差评"}
    ],
    pl:[
      {img:"头像2", tel:"18997875727", comments:"感觉还不错", value:"3", time:"2020-12-23"},
      {img:"头像3", tel:"call me", comments:"挺好的呀", value:"5", time:"2020-12-25"},
      {img:"头像5", tel:"我是猫头鹰", comments:"阿巴阿巴阿巴", value:"1", time:"2020-12-27"}
    ]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.plchaxun();
  },
  plchaxun() {
    var that = this;
    wx.request({  //记得这个URL如果你没有域名的话  不改东西的话是会报错的
      url: 'http://localhost:80/api/pl',  //请求Java的URL
      method: 'get',                                        //提交方式

      success: function (res) {   //接受后台的回调函数
        var resData = res.data;
        console.log("数据", resData);
        console.log("this:", that);
        that.setData({
          // 数组拿到data里的值 页面需要遍历
          pl: resData,
        })
      }
    })
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