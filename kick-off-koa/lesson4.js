var koa = require('koa');
var app = koa();
var parse = require('co-body');
var fs = require('fs');

app.use(function *(next){
  if (this.path === "/json") {
    this.body = { "foo": "bar" };
  } else if (this.path === "/stream") {
    this.body = fs.createReadStream(process.argv[3]);
  }
});

var port = process.argv[2];

app.listen(port);
