// 时间
var util = require('../../utils/util.js');
// 数据库
const db1=wx.cloud.database();
var dt_id='';//传递给其他页面的id
var id='';
var d1=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],//所有记录
  },
  remove(res){
    var id=res.target.id
    console.log(id);
    db1.collection("zonce").doc(id).remove()
    .then(res=>{
      console.log(res);
      this.onLoad();
    })
  },
  look(res){
    var that = this
    dt_id=res.target.id
    console.log(dt_id)
    wx.navigateTo({
      url: '/pages/detail/detail?id='+dt_id,
    })
  },
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        instance.close();
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    db1.collection("zonce").get().then(res=>{
      d1=res.data;
      d1.reverse();
      this.setData({
        dataArr:d1
      })
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
    this.onLoad();
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