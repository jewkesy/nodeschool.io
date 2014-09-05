var fs = require('fs')
  , http = require('http')
  , async = require('async');


async.waterfall([
    function(callback){
      fs.readFile(process.argv[2], function(err, data) {
        if (err) return err;
        //console.log(data.toString());
        callback(null, data.toString());
      });
    },

    function(url, callback){
      //console.log(url)
      http.get(url, function(res){
        var str = "";

        res.on('data', function (chunk) {
          str += chunk;
        });

        res.on('end', function () {
          //console.log(str);
          // your code here if you want to use the results !
          callback(null, str);
        });


      });
    }
  ], function (err, result) {
  if (err) return console.error(err);
   // result now equals 'done'
   console.log(result);
});


// async.waterfall([
//   function(done){
//     fs.readFile(process.argv[2], function(err, data){
//       if (err) return done(err);
//       done(null, data)
//     });
//   },
//
//   function(data, done){
//     var body = '';
//     http.get(data.toString().trimRight(), function(res){
//       res.on('data', function(chunk){
//         body += chunk.toString();
//       });
//
//       res.on('end', function(chunk){
//         done(null, body);
//       });
//     }).on('error', function(e){
//       done(e);
//     });
//   }
// ], function(err, result){
//   if (err) return console.error(err);
//   console.log(result);
// });
