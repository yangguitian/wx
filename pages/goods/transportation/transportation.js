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
      { pic:"/images/商品/电动车1.png", text:"小牛N1锂电电动车 八成新", price:"4700", url:"details-3/details-3"},
      { pic:"https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3717141425,1295107855&fm=26&gp=0.jpg", text:"小牛智能电动踏板车", price:"2800", url:"details-1/details-1"},
      { pic:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3734698712,2226101219&fm=26&gp=0.jpg", text:"猴子摩托车本田MINI摩托车", price:"3500", url:"details-1/details-1"},
      { pic:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=917279891,3113800096&fm=26&gp=0.jpg", text:"轻便单人电动车", price:"1888", url:"details-1/details-1"},
      { pic:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3189887761,66962618&fm=26&gp=0.jpg", text:"电动老年休闲车", price:"2690", url:"details-1/details-1"},
      { pic:"https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1955609582,370548335&fm=26&gp=0.jpg", text:"迷你微型电动车", price:"1819", url:"details-1/details-1"},
      { pic:"https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3893653714,3161268213&fm=26&gp=0.jpg", text:"九成新二手电动车", price:"2299", url:"details-1/details-1"},
      { pic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4100931457,4834067&fm=26&gp=0.jpg", text:"小牛改装电动车", price:"2819", url:"details-1/details-1"},
      { pic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3678450708,2918395834&fm=26&gp=0.jpg", text:"锂电池电动车", price:"4299", url:"details-1/details-1"},
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