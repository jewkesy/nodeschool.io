// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection, props) {
    // do work; return stuff
    return _.where(collection, {active:  true});
};

// export the worker function as a nodejs module
module.exports = worker;
