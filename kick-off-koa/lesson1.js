var koa = require('koa');
var app = koa();

app.use(function *(){
  this.body = 'hello koa';
});

var port = process.argv[2];

app.listen(port);
