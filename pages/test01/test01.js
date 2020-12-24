//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    hidden: false,
    curNav: 1,
    curIndex: 0,
    cart: [],
    cartTotal: 0,
    navList: [
      { id: 1, name: '数码产品' },
      { id: 2, name: '书籍教材' },
      { id: 3, name: '衣鞋帽伞' },
      { id: 4, name: '代步工具' },
      { id: 5, name: '体育健身' },
      { id: 6, name: '家用电器' },
      { id: 7, name: '日常用品' },
      { id: 8, name: '虚拟产品' },
      { id: 9, name: '手工设计' },
      { id: 10, name: '乐器' },
      { id: 11, name: '其他' },
    ],
    dishesList: [
      [
        {goods:"phone/phone", pic:"手机", name: "手机", num: 1, id: 1 },
        {goods:"phone/phone", pic:"平板", name: "平板", num: 1, id: 29 },
        {goods:"phone/phone", pic:"手机", name: "水煮鱼", num: 1,  id: 2 },
        {goods:"computer/computer", pic:"手机", name: "手机", num: 1, id: 1 },
        {goods:"phone/phone", pic:"平板", name: "平板", num: 1, id: 29 },
        {goods:"phone/phone", pic:"手机", name: "水煮鱼", num: 1,  id: 2 },
        {goods:"phone/phone", pic:"手机", name: "手机", num: 1, id: 1 },
        {goods:"phone/phone", pic:"平板", name: "平板", num: 1, id: 29 },
        {goods:"phone/phone", pic:"手机", name: "水煮鱼", num: 1,  id: 2 },
        {goods:"phone/phone", pic:"手机", name: "手机", num: 1, id: 1 },
        {goods:"phone/phone", pic:"平板", name: "平板", num: 1, id: 29 },
        {goods:"phone/phone", pic:"手机", name: "水煮鱼", num: 1,  id: 2 }
      ],
      [
        {goods:"phone/phone", pic:"手机", name: "小炒日本豆腐", num: 1, id: 3
        },
        {goods:"phone/phone", pic:"手机", name: "烤鱼", num: 1, id: 4 }
      ],
      [
        {goods:"phone/phone", pic:"手机", name: "大拌菜", num: 1, id: 5 },
        {goods:"phone/phone", pic:"手机",  name: "川北凉粉", num: 1, id: 6 }
      ],
      []
    ],
    dishes: []
  },
  // 页面加载改变时执行
  // loadingChange(){
  // setTimeout(function(){
  // this.setData({hidden:true})
  // },1000)
  // },
  // 分页菜单函数
  selectNav(event) {
    let id = event.target.dataset.id,
      index = parseInt(event.target.dataset.index);
    self = this;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
})