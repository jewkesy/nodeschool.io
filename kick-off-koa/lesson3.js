var koa = require('koa');
var app = koa();
var parse = require('co-body');

app.use(function *(next){
  var body = yield parse(this);
  this.body = body.name.toUpperCase();
});

var port = process.argv[2];

app.listen(port);
