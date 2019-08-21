const express = require('express')
const request = require('request')
const app = express()

app.use('*', function (req, res, next) {
	// 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由
    next();
});

app.get('/movielist',function(req,resp) {
    const type = req.query.type
 
    // resp.send('ok')
    var url = 'https://douban.uieee.com/v2/movie/' + type

    request(url, function (error, response, body) {
        resp.send(body)
    });
})

app.listen('7080',function() {
    console.log('ok')
})