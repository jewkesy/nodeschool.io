'use strict';
// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff

    var retVal = [];

    var orders = _.groupBy(collection, 'article');

    //console.log(orders);

    _.forEach(orders, function (item, key){
      //console.log(value);
      var total = _.reduce(item, function(sum, item){
        return sum + item.quantity;
      }, 0)
      retVal.push({"article": parseInt(key), "total_orders": total});
    });

    return _.sortBy(retVal, "total_orders").reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
