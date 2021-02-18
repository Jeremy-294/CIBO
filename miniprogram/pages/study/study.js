// pages/study/study.js
var d1,d2=[];
var id1,id2='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    dataArr:[],
    dataArr2:[],
  },
  onChange(event) {
    wx.showToast({
      title: `${event.detail.name}`,
      icon: 'none',
    });
  },
  getID1(res){
    // console.log(res.currentTarget.id);
    id1=res.currentTarget.id
    wx.navigateTo({
      url: '../../pages/stu1/stu1?id='+id1,
    })
  },
  getID2(res){
    // console.log(res.currentTarget.id);
    id2=res.currentTarget.id
    wx.navigateTo({
      url: '../../pages/stu2/stu2?id='+id2,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"getStudy"
    }).then(res=>{
      // console.log(res.result.data);
      d1=res.result.data;
      d1.reverse();
      this.setData({
        dataArr:d1,
      })
    })
    wx.cloud.callFunction({
      name:"getBlink"
    }).then(res=>{
      // console.log(res.result.data);
      d2=res.result.data;
      d2.reverse();
      this.setData({
        dataArr2:d2
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