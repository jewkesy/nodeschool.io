var koa = require('koa');
var app = koa();
var views = require('co-views');

var user = {
      name: {
        first: 'Tobi',
        last: 'Holowaychuk'
      },
      species: 'ferret',
      age: 3
    };

var render = views(__dirname + '/views', {
  ext: 'ejs'
});

app.use(function* () {
  this.body = yield render('user', {user: user});
});

app.listen(process.argv[2]);
