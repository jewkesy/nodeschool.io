var koa = require('koa');
var app = koa();
var parse = require('co-body');
var fs = require('fs');

app.use(function *(next){
  if (this.request.is('application/json')) {
    this.body = { "message": "hi!" };
  } else {
    this.body = "ok";
  }
});

var port = process.argv[2];

app.listen(port);
