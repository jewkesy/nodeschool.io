var koa = require('koa');
var app = koa();

app.use(function *(next){
  if (this.path === "/") {
    this.body = 'hello koa';
  }
  else if (this.path === "/404") {
    this.body = 'page not found';
  }
  else if (this.path === "/500") {
    this.body = 'internal server error'
  }
  else {
    return yield next;
  }

});

var port = process.argv[2];

app.listen(port);
