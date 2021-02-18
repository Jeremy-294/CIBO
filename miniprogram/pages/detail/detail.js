var id='';
const db1=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options,id) {
  var that = this
  id=options.id
  // console.log(id)
  db1.collection("zonce").doc(id).get()
  .then(res=>{
    this.setData({
      dataArr:res.data
    })
    console.log(res.data)
  })
  },
  ToUpdate(res){
    var that = this
    // console.log(res.target.id)
    var id=res.target.id
    wx.navigateTo({
      url: '/pages/update/update?id='+id,
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