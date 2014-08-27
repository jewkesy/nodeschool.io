// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    var retVal = {hot: [], warm: []};

    function checkTemp(item) {
      //console.log(item);
      return item > 19;
    }

    _.forEach(collection, function(temps, town) {

       if (_.every(temps, checkTemp)) {
         retVal.hot.push(town);
       }
       else if (_.some(temps, checkTemp)) {
         retVal.warm.push(town);
       }
    });
    //console.log(retVal);
    return retVal;
};

// export the worker function as a nodejs module
module.exports = worker;
