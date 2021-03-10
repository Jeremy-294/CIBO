# CIBO微信小程序介绍

### 🖊 基础介绍

- **项目介绍:** CIBO 是一个基于云开发的微信小程序，主要用于辅助学习讨论，特色是提供发表与浏览的功能。目前已上线。 
- **主要负责:** 独立开发，负责整个项目从零开始的搭建，独立完成项目中登录模块，发布模块，仓库模块和浏览模块的前端 开发。 
- **涉及技术:** 小程序组件化开发，Vant Weapp UI，Promise，Flex 布局，云开发(云函数/云数据库/云存储) 
- **详细内容:** 
  - 通过组件化开发，注重组件复用性，采用 Promise+回调，async+await处理异步请求。
  - 使用云开发，封装并部署云函数，在服务端处理请求，减少客户端负担。
  - 对输入做防抖处理，优化输入性能，采用 localStorage 本地缓存，减少 HTTP 请求。
  - 采用 Flex 布局实现页面布局，按需引入Vant Weapp UI组件，减小项目体积。
  - 通过 onPageScroll() 监听页面滚动,判读元素距离页面顶部距离与页面可视高度对比实现图片懒加载，减轻服务端压力。


### 🐱 页面介绍

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210218163633697.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0ODAxNw==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210218163640384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0ODAxNw==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210218163700230.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzY0ODAxNw==,size_16,color_FFFFFF,t_70)

<center>🐱CIBO之前名称为综测宝，现以更正为CIBO<center/>
