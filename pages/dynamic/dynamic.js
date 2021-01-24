// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // new: [
    //   { time:"2020年12月20日 23:58", pic: "新闻22", text: "今天，南宁数字科技学院（筹）开工奠基！" },
    //   { url:"new-1/new-1", time:"2020年11月22日 23:09", pic: "新闻2", text: "习近平为这个重大国际展会发表视频致辞，传递哪些鲜明信息？" },
    //   { time:"2020年11月29日 23:14", pic: "新闻20", text: "探索信息化教学模式与UI设计教学的新思路" },
    //   { time:"2020年11月22日 23:09", pic: "新闻21", text: "校运会丨运动场上的隐秘而伟大" },
    //   { time:"2020年11月03日 07:40", pic: "新闻30", text: "军训动员大会丨秋雨中的军装人" }
    // ]
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.newschaxun();
  },
  newschaxun() {
    var that = this;
    wx.request({  //记得这个URL如果你没有域名的话  不改东西的话是会报错的
      url: 'http://localhost:80/api/news',  //请求Java的URL
      method: 'get',                                        //提交方式

      success: function (res) {   //接受后台的回调函数
        var resData = res.data;
        console.log("数据", resData);
        console.log("this:", that);
        that.setData({
          // 数组拿到data里的值 页面需要遍历
          news: resData,
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