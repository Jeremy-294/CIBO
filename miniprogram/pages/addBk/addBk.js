// 时间
var util = require('../../utils/util.js');
var title,content,time,time1,avatarUrl,nickName='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
  },
  title(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    title=event.detail
  },
  content(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    content=event.detail
  },
  subBtn(){
    wx.showLoading({
      title: '发布中',
      mask: true,
    })
    wx.cloud.callFunction({
      name:"addBlink",
      data:{
        title:title,
        content:content,
        time:time,
        avatarUrl:avatarUrl,
        author:nickName
      }
    }).then(res=>{
      console.log(res)
      wx.hideLoading()
      // 跳转学习
      const url="/pages/study/study"
      wx.switchTab({
        url: url,
    })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 时间
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    time = util.formatTime(new Date());
    time1=time.split(" ")[0].split("/")//变数组
    time=time1[0]+"-"+time1[1]+"-"+time1[2]
    console.log(time)

     /**
     * 获取用户信息
     */
    var that=this;
    wx.getUserInfo({
      success:function(res){
        // console.log(res);
        avatarUrl=res.userInfo.avatarUrl;
        nickName=res.userInfo.nickName;
        console.log(nickName)
        console.log(avatarUrl)
      }
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