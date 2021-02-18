// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection("Blink").add({
    data:{
      title:event.title,
      content:event.content,
      time:event.time,
      avatarUrl:event.avatarUrl,
      author:event.author
    }
  })
}