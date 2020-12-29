// pages/goods/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option1: [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ],
    option2: [
      { text: '默认排序', value: 'a' },
      { text: '销量排序', value: 'b' },
      { text: '价格排序', value: 'c' },
    ],
    value1: 0,
    value2: 'a',
    menu:[
      { pic:"https://img.alicdn.com/imgextra/i1/31799034/O1CN01cm5EZl2GbcgxITCKF_!!0-saturn_solar.jpg_468x468q75.jpg_.webp", text:"华为 nova7 Pro 5G手机官方旗舰店正品8全网通", price:"3500", url:"details-1/details-1"},
      { pic:"https://img14.360buyimg.com/n0/jfs/t1/118181/21/9646/127309/5edda774E49ad167a/169a93c1a2b342ae.jpg", text:"先科无线蓝牙音箱 迷你随身便携式音响", price:"58.00", url:"details-1/details-1"},
      { pic:"https://img14.360buyimg.com/n0/jfs/t1/147903/32/16516/111280/5fc775e2Ebc747073/b5a8da603e1be762.jpg", text:"麦博 多媒体可壁挂式木质书架 蓝牙音箱 黑色", price:"299", url:"details-1/details-1"},
      { pic:"/images/商品/平板1.png", text:"ipad 2017 32g 苹果平板电脑 ios系统", price:"1690", url:"details-1/details-1"},
      { pic:"https://img14.360buyimg.com/n0/jfs/t1/142719/12/444/104550/5ee1988cEd952bf51/74860b136a001168.jpg", text:"小米手环5 NFC版 石墨黑 动态彩屏 智能运动监测", price:"219", url:"details-1/details-1"},
      { pic:"https://img.alicdn.com/imgextra/i1/1714128138/O1CN01ptgjS129zFpiqloFx-1714128138.jpg_430x430q90.jpg", text:"小米路由器4A千兆版 1200M双频无线速率 5G 家用智能", price:"299", url:"details-1/details-1"},
    ]
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