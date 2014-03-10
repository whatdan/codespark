##codeSpark##

一个具有code review功能的web项目.
使用或者将会使用的技术包括：
> 
- 构建工具:yeoman
- node.js开发框架:Express
- css预处理器:less
- Javascript 预处理器:coffee
- Javascript MVW 开发框架: AngularJS
- 模块化开发类库:require.js
- 工具库:Underscore.js
- ...

有些技术我也不是很熟悉,需要边学边实践.欢迎感兴趣的同学指教和贡献代码,共同维护这个项目.

## Running ##

1.`clone`下整个项目

2.运行`npm install` 安装项目依赖（具体可以在`package.json`中具体查看）

3.运行`grunt server`



## 问题反馈 ##

提问请到 [issues](https://github.com/devqin/codespark/issues) , 使用说明到 [WIKI](https://github.com/devqin/codespark/wiki)

## Contributing ##

贡献代码,请点击[Fork](https://github.com/devqin/codespark/fork "Fork")

贡献排名[请点击](https://github.com/devqin/codespark/graphs/contributors)

## Todo ##
和上一版的不同之处.
使用mongodb的gridfs存储上传的文件,而不是保存在硬盘.
不再使用jade,取而代之的是通常的html文件
在项目中使用了angularjs,如代码页,请求代码然后着色渲染......
依然后很多事情要做,如下


1.项目js代码用coffee重写,配置Gruntfile,对前端coffee代码编译.

2.完善登录控制模块,采用cookie+session的验证方式

3.页头,登录条在登录后的样式

###index.html###

> 1.登录条登录后的样式

###code.html###

>1.标注功能

>2.评论功能


###palce.html###

>1.列出所有上传的代码,按照阅读次数排序

>2.所有链接均可点击,并去相关的页面或得到相关信息

###i.html###

>1.个人成就(可分享)

>2.读过,在读,想读

>3.个人活动,标注,评论,博客等


###upload.html###

>1.用户上传代码

>2.上传文件夹

>3.根据github链接checkout代码

###wtite.html###

>1.完成一个干净简约的写东西的编辑器.



###register.html,login.html###

>1.第三方新浪微博登录,google,github登录

>2.登录提示错误,正确,密码找回

>3.成功后跳转到个人页面











