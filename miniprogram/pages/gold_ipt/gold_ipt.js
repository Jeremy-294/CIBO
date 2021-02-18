// pages/gold_ipt/gold_ipt.js
const db1=wx.cloud.database();
var goldGpa,goldFen,nowGpa,nowFen='';
Page({

  // 84e72bb95f2415ea0031e56b4abfc467
  /**
   * 页面的初始数据
   */
  data: {
    
  },
  updateData(){
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
    db1.collection("golds").add({
      data:{
        goldGpa:goldGpa,
        goldFen:goldFen,
        nowGpa:nowGpa,
        nowFen:nowFen
      }
    }).then(res=>{
      console.log(res);  
      wx.hideLoading();
      // 跳转首页
      const url="/pages/index/index"
      wx.switchTab({
        url: url,
    })
    })
  },
  GoldGpa(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    goldGpa=event.detail
  },
  GoldFen(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    goldFen=event.detail;
    
  },
  NowGpa(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    nowGpa=event.detail;
    
  },
  NowFen(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    nowFen=event.detail;
   
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