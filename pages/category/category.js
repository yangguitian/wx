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
        {goods:"digital/digital", pic:"手机", name: "手机", num: 1, id: 1 },
        {goods:"digital/digital", pic:"平板", name: "平板", num: 1, id: 29 },
        {goods:"digital/digital", pic:"笔记本", name: "笔记本", num: 1,  id: 2 },
        {goods:"digital/digital", pic:"台式机", name: "台式机", num: 1, id: 1 },
        {goods:"digital/digital", pic:"手表手环", name: "手表手环", num: 1, id: 29 },
        {goods:"digital/digital", pic:"单反相机", name: "单反相机", num: 1,  id: 2 },
        {goods:"digital/digital", pic:"充电宝", name: "充电宝", num: 1, id: 1 },
        {goods:"digital/digital", pic:"耳机", name: "耳机", num: 1, id: 29 },
        {goods:"digital/digital", pic:"手机配件", name: "手机配件", num: 1,  id: 2 },
        {goods:"digital/digital", pic:"电脑配件", name: "电脑配件", num: 1, id: 1 },
        {goods:"digital/digital", pic:"路由器", name: "路由器", num: 1, id: 29 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1,  id: 2 }
      ],
      [
        {goods:"digital/digital", pic:"教科书", name: "教科书", num: 1, id: 3},
        {goods:"digital/digital", pic:"文学", name: "文学", num: 1, id: 3},
        {goods:"digital/digital", pic:"小说", name: "小说", num: 1, id: 3},
        {goods:"digital/digital", pic:"教育考试", name: "教育考试", num: 1, id: 3},
        {goods:"digital/digital", pic:"动漫", name: "动漫", num: 1, id: 3},
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 4 }
      ],
      [
        {goods:"digital/digital", pic:"裙子", name: "裙子", num: 1, id: 5 },
        {goods:"digital/digital", pic:"裤子", name: "裤子", num: 1, id: 5 },
        {goods:"digital/digital", pic:"衣服", name: "衣服", num: 1, id: 5 },
        {goods:"digital/digital", pic:"帽子", name: "帽子", num: 1, id: 5 },
        {goods:"digital/digital", pic:"鞋子", name: "鞋子", num: 1, id: 5 },
        {goods:"digital/digital", pic:"箱子", name: "箱子", num: 1, id: 5 },
        {goods:"digital/digital", pic:"包包", name: "包包", num: 1, id: 5 },
        {goods:"digital/digital", pic:"雨伞", name: "雨伞", num: 1, id: 6 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
       [
        {goods:"digital/digital", pic:"自行车", name: "自行车", num: 1, id: 5 },
        {goods:"digital/digital", pic:"旱冰鞋", name: "旱冰鞋", num: 1, id: 5 },
        {goods:"digital/digital", pic:"平衡车", name: "平衡车", num: 1, id: 5 },
        {goods:"digital/digital", pic:"滑板", name: "滑板", num: 1, id: 5 },
        {goods:"digital/digital", pic:"摩托车", name: "摩托车", num: 1, id: 5 },
        {goods:"digital/digital", pic:"电动车", name: "电动车", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"球类", name: "球类", num: 1, id: 5 },
        {goods:"digital/digital", pic:"球拍", name: "球拍", num: 1, id: 5 },
        {goods:"digital/digital", pic:"运动鞋", name: "运动鞋", num: 1, id: 5 },
        {goods:"digital/digital", pic:"运动装备", name: "运动装备", num: 1, id: 5 },
        {goods:"digital/digital", pic:"健身器械", name: "健身器械", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"电磁炉", name: "电磁炉", num: 1, id: 5 },
        {goods:"digital/digital", pic:"洗衣机", name: "洗衣机", num: 1, id: 5 },
        {goods:"digital/digital", pic:"冰箱", name: "冰箱", num: 1, id: 5 },
        {goods:"digital/digital", pic:"风扇", name: "风扇", num: 1, id: 5 },
        {goods:"digital/digital", pic:"电饭煲", name: "电饭煲", num: 1, id: 5 },
        {goods:"digital/digital", pic:"豆浆机", name: "豆浆机", num: 1, id: 5 },
        {goods:"digital/digital", pic:"吹风筒", name: "吹风筒", num: 1, id: 5 },
        {goods:"digital/digital", pic:"音响", name: "音响", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"化妆护肤", name: "化妆护肤", num: 1, id: 5 },
        {goods:"digital/digital", pic:"小工具", name: "小工具", num: 1, id: 5 },
        {goods:"digital/digital", pic:"学习用品", name: "学习用品", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"游戏周边", name: "游戏周边", num: 1, id: 5 },
        {goods:"digital/digital", pic:"充值卡", name: "充值卡", num: 1, id: 5 },
        {goods:"digital/digital", pic:"游戏账号", name: "游戏账号", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"书法", name: "书法", num: 1, id: 5 },
        {goods:"digital/digital", pic:"绘画", name: "绘画", num: 1, id: 5 },
        {goods:"digital/digital", pic:"工艺品", name: "工艺品", num: 1, id: 5 },
        {goods:"digital/digital", pic:"服装设计", name: "服装设计", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"吉他", name: "吉他", num: 1, id: 5 },
        {goods:"digital/digital", pic:"钢琴", name: "钢琴", num: 1, id: 5 },
        {goods:"digital/digital", pic:"尤克里里", name: "尤克里里", num: 1, id: 5 },
        {goods:"digital/digital", pic:"民族管弦", name: "民族管弦", num: 1, id: 5 },
        {goods:"digital/digital", pic:"西洋管弦", name: "西洋管弦", num: 1, id: 5 },
        {goods:"digital/digital", pic:"打击乐器", name: "打击乐器", num: 1, id: 5 },
        {goods:"digital/digital", pic:"乐器配件", name: "乐器配件", num: 1, id: 5 },
        {goods:"digital/digital", pic:"电脑音乐", name: "电脑音乐", num: 1, id: 5 },
        {goods:"digital/digital", pic:"口琴竖笛", name: "口琴/竖笛", num: 1, id: 5 },
        {goods:"digital/digital", pic:"电子琴", name: "电子琴", num: 1, id: 5 },
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ],
      [
        {goods:"digital/digital", pic:"其他", name: "其他", num: 1, id: 6 }
      ]
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