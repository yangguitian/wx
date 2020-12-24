// pages/setting/setting.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  // Back:function(){
  //   var self = this;
  //   var pages = getCurrentPages();
  //   if(pages.length == 1){
  //     if(self.data.cir)
  //   }
  // }
 
  
 

  /**
   * 组件的方法列表
   */
  methods: {
    Back(){
      wx.navigateBack()
    },
    goTopersonal:function(){
      wx.navigateTo({
        url: '/pages/set/personal/personal',
      })
    },
  }
})
