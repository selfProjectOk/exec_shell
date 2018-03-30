

let fs = require('fs');
let express = require('express')
let path = require("path");
let app = express()

//设置静态页面
app.use("/shell", express.static(__dirname + '/shell'));
app.use("/static", express.static(__dirname + '/views/static'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//首页
app.get('/', function (req, res) {
  let baseUrl = __dirname + '/shell';
  var result = fs.readdirSync(baseUrl);
  result = (result instanceof Array) ? result : [];
  result = result.filter(function (v) {
    return fs.statSync(baseUrl + '/' + v).isFile() && v.match(/.sh$/);
  });
  res.locals.links = result;
  res.render("index.ejs");
});
// 执行shell文件
app.get('/exec/:name', function (req, res) {
  console.log(req.params.name);
  res.send('666');
});


console.log("http://localhost:8907")
app.listen(8907)

