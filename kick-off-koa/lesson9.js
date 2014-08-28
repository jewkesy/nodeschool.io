var koa = require('koa');
var session = require('koa-session');
var app = koa();
app.keys = ['secret', 'keys'];

app.use(session());

app.use(function* () {
  var viewCount = this.session.views + 1 || 1;
  this.session.views = viewCount
  this.body = viewCount + ' views';

});

app.listen(process.argv[2]);
