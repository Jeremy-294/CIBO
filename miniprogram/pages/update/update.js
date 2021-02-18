// 时间
var util = require('../../utils/util.js');
// 数据库
const db2=wx.cloud.database();
var title,fen,lei,radio,ps,time='';
var id='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[],
    value: '',
    label:'',
    icon:'',
    radio: '1',
    // 上传图片开始 还没定事件
    fileList: [],
    //上传图片结束
  },
  subBtn(res){
    var id=res.target.id
    wx.showLoading({
      title: '提交中',
      mask: true,
    })
    //连接数据库 'zonce'
    //update
    db2.collection("zonce").doc(id).update({
      data:{
        title:title,
        fen:fen,
        lei:lei,
        radio:radio,
        ps:ps,
        time:time
      }
    })
    .then(res=>{
      console.log(res)
      wx.hideLoading()
      // 跳转仓库
      const url="/pages/all/all"
      wx.switchTab({
        url: url,
    })
    })
  },
  Title(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    title=event.detail
  },
  Fen(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    fen=event.detail
  },
  Lei(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    lei=event.detail
  },
  raido(event){
      this.setData({
        radio:event.detail,
      });
      console.log(event.detail)
      radio=event.detail
  },
  Ps(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    ps=event.detail
  },
  // 图片回显
  afterRead:function(event){
    console.log(event);
    const { file } = event.detail;
    const{fileList=[]} = this.data;
    fileList.push({url:file.path});
    this.setData({fileList})
    console.log(fileList)
    },
  // 点击那个问号按钮时
  onClickIcon(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    id=options.id;
    // console.log(id);
     //get
     db2.collection("zonce").doc(id).get()
     .then(res=>{
       this.setData({
        dataArr:res.data
       })
      
     })
    // 记录创建时间
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    time = util.formatTime(new Date());
    // console.log(time)
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