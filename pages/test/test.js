// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:"",
    ary:["a","b","c","d"],
  },

  onChange(){
    this.setData({
      info:"info is changed"
    });
  },
  outerview(e){
    console.log(e.target,e.currentTarget);
  },
  innerview(e){
    
    console.log(e.target,e.currentTarget);
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

    console.log("刷新开始");
    
    // wx.startPullDownRefresh({
    //   success:function(){
    //     // console.log("刷新开始");
    //     // setTimeout(() => {
          
    //     //   wx.stopPullDownRefresh({
    //     //     success:function(){
    //     //       console.log("刷新停止");
    //     //     }
    //     //   });
    //     // },2000)
    //   },
    //   complete:function(){

    //     // console.log("刷新开始");
    //   }
    // })
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