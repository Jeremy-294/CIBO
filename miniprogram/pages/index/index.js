// 时间
var util = require('../../utils/util.js');
// 数据库
const db1=wx.cloud.database();
var goldGpa,goldFen,nowGpa,nowFen='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
  weekday: '',
  week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  dataArr:[],//目标与现况
  dataArr2:[],//近期记录
  },
  ToAll(){
    wx.switchTab({
      url: '/pages/all/all',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 时间
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    time=time.split(" ")[0].split("/")//变数组
    console.log(time)
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    // 数据库
    db1.collection("golds").get().then(res=>{
      this.setData({
        dataArr:res.data
      })
    })
    db1.collection("zonce").get().then(res=>{
      this.setData({
        dataArr2:res.data
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
    var today=new Date().getDay(); 
    console.log("today:"+today);
    switch (today){
        case 0:
        this.setData({
          weekday: this.data.week[0]
        }) 
        break; 
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
       this.setData({
         weekday: this.data.week[today]
       })
        break;
      }
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