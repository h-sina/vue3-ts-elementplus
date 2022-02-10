# 关于豆瓣电影和网易云音乐带登录注册留言功能的系统
访问：访问https://vue3-ts-elementplus.web.cloudendpoint.cn/但是不能登录 （没安置数据库）
### 灵感和接口来源
https://github.com/biaochenxuying/blog-vue-typescript<br>
https://github.com/iiiiiii1/douban-imdb-api<br>
https://github.com/Binaryify/NeteaseCloudMusicApi<br>
### 效果图
![](https://img-blog.csdnimg.cn/06e7f5d266834d329b9e27105908af66.gif)
![](https://img-blog.csdnimg.cn/23a6e18dac194230ad6abd152e60d3a4.gif)
![](https://img-blog.csdnimg.cn/c111543626c34a23a2944ced4b517647.gif)
### 使用方法
1. git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
2. node app.js
3. 以上是为网易云的后台打开方式
4. 后端（nodejs）：另外还需要打开这边登录注册的后台api接口才能正常工作(https://github.com/h-sina/nodejs)下载 node index.js启动
5. 数据库 user表和comment表 还没💴部署到云服务器
6. 前端（vue+ts+elementplus）：git clone https://github.com/h-sina/vue3-ts-elementplus.git 下载 npm run serve启动
