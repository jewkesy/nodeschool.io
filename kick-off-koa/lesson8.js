var koa = require('koa');
var app = koa();
app.keys = ['secret', 'keys'];

app.use(function* () {
  var viewCount = parseInt(this.cookies.get('view', { 'signed' : true})) + 1 || 1;
  this.cookies.set('view', viewCount, { 'signed' : true});
  this.body = viewCount + ' views';

});

app.listen(process.argv[2]);
