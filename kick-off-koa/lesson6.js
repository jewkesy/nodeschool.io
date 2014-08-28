var koa = require('koa');
var app = koa();

app.use(responseTime());
app.use(upperCase());

app.use(function* () {
  // STEP 3 - respond
  this.body = 'hello koa';
});

function responseTime() {
  return function* (next) {
    // STEP 1 - record start time
    var startTime = new Date;
    yield next;
    // STEP 5 - set X-Response-Time head
    var msTime = new Date - startTime;
    this.set('X-Response-Time', msTime + 'ms');
  };
}

function upperCase() {
  return function* (next) {
    // STEP 2 - do nothing
    yield next;
    // STEP 4 - convert this.body to upper case
    this.body = this.body.toUpperCase();
  };
}

app.listen(process.argv[2]);
