// pages/set/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   buy:[
  //     {title1:"招聘兼职销售人员", title2:"按提成结算", title3:"地区无限制 | 长期", moshi:"自营", good1:"福利好", good2:"提成高", pic:"头像6.png", name:"深圳市言信网络科技有限公司", num:"招5人", time:"2019-10-08"},
  //     {title1:"招聘传单派发员", title2:"按天结算", title3:"地区无限制 | 短期", moshi:"自营", good1:"轻松活", good2:"待遇好", pic:"头像3.png", name:"相思湖能力有限公司", num:"招2人", time:"2020-2-25"},
  //     {title1:"招聘兼职售货员", title2:"按月结算", title3:"地区无限制 | 长期", moshi:"自营", good1:"福利好", good2:"提成高", pic:"头像4.png", name:"天天聚划算超市", num:"招1人", time:"2020-12-11"},
  //   ]
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.buychaxun();
  },
  buychaxun() {
    var that = this;
    wx.request({  //记得这个URL如果你没有域名的话  不改东西的话是会报错的
      url: 'http://localhost:80/api/buy',  //请求Java的URL
      method: 'get',                                        //提交方式

      success: function (res) {   //接受后台的回调函数
        var resData = res.data;
        console.log("数据", resData);
        console.log("this:", that);
        that.setData({
          // 数组拿到data里的值 页面需要遍历
          buy: resData,
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