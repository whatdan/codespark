一个具有code review功能的web项目.

项目实例我会更新到百度BAE上的[CodeSpark项目](http://codespark.duapp.com/ "CodeSpark").

设立这个项目的目的在于调研业内web项目开发中使用的新技术和开发方式,如:

> 
- 构建工具:Grunt(yeoman)
- node.js开发框架:Express
- Node 模板引擎:jade
- css预处理器:less
- Javascript 预处理器:coffee
- Javascript MVW 开发框架: AngularJS
- 模块化开发类库:require.js
- 工具库:Underscore.js
- ...

有些技术我也不是很熟悉,需要边学边实践.如我所说,目的在于开发技术调研,同时欢迎感兴趣的同学指教和贡献代码,共同维护这个项目.

## Running ##

1. `clone` 项目
2. 进入到`codespark`
3. 运行 `node server.js`

## 问题反馈 ##

提问请到 [issues](https://github.com/devqin/codespark/issues) , 使用说明到 [WIKI](https://github.com/devqin/codespark/wiki)

## Contributing ##

贡献代码,请点击[Fork](https://github.com/devqin/codespark/fork "Fork")

贡献排名[请点击](https://github.com/devqin/codespark/graphs/contributors)

## Todo ##

这个工具共分为:阅读代码页(code.jade),登录页(login.jade)，注册页(register.jade)，个人页(i.jade)，排行榜(place.jade)，写文章的页面（write.jade）这六个页面。通过路由（server.coffee）的配置，可以访问这些页面。大致功能如上，剩下的工作主要是丰富页面的交互操作，如下：

*阅读代码页(code.jade)

> 1.增加，更加丰富的操作。添加注释，点评，标注等，参考kindle

> 2.增加，更多的个性化设定。颜色，显示设置，怎么样使阅读更舒服，更专注等

登录页(login.jade)

> 1.增加，登录反馈信息。失败，错误，第三方登录（特别是微博），等常规信息提示

注册页(register.jade)

> 1.增加，注册反馈信息。失败，错误，昵称（不允许有任何符号）重复，邮箱格式，第三方登录（特别是微博），等常规信息提示

个人页(i.jade)

> 1.增加，个性化信息统计，分享。统计信息方向是用户的成就，包括但不限于，读过，写过，标注及活跃度，赞等

排行榜(place.jade)

> 1.增加，社区代码阅读排行榜。具体格式在place.jade

> 2.在排行榜内的数据可点击去相关的页面

写文章的页面（write.jade）

> 1.添加，用户交互效果。效果参考mado，zenpen.io，有时候我就是想找一个干干净净的地方写点东西，图片添加方便，格式美观，易于分享，有存档。

全站

> 1.需要增加，全站的错误提示页面（404.jade）

> 2.需要增加，用户登录后页头登录框要相应的消失，显示为 该用户信息，成就，积分，退出登录

> 3.需要增加，分享功能设计和实现

（待定）积分设置:

> 上传代码

> 评论

> 写篇文章

> 赞

> follow

> 活跃度

> ...

根据上述Todo，相关api可能不全，虽然我在不停的开发相关api。如果遇到此问题，请提issues

`thanks you all`










