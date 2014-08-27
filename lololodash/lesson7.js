'use strict';
// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff

    var retVal = {};

    collection = _.sortBy(collection, "income");

    var avg = _.reduce(collection, function(memo, num)
    {
      return memo + num.income;
    }, 0) / _.size(collection);

    // console.log(avg);
    retVal.average = avg;

    var unders = _.filter(collection, function(item){
      return item.income <= avg;
    });

    retVal.underperform = unders;

    var overs = _.filter(collection, function (item){
      return item.income > avg;
    });

    retVal.overperform = overs;

    //console.log(retVal);
    return retVal;
};

// export the worker function as a nodejs module
module.exports = worker;
