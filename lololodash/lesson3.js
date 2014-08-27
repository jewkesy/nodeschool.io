// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff
    return _.forEach(collection, function(item){
      if (item.population < 0.5) {
        item.size = "small";
      }
      else if (item.population > 1) {
        item.size = "big";
      }
      else {
        item.size = "med";
      }
      return item;
    })
};

// export the worker function as a nodejs module
module.exports = worker;
