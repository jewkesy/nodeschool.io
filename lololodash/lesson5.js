// include the Lo-Dash library
var _ = require("lodash");

var worker = function(collection) {
    // do work; return stuff

    var retVal = [];

    var comments = _.groupBy(collection, 'username');
    _.forEach(comments, function (value, name) {
      retVal.push({'username': name, 'comment_count': _.size(value) });
    })

    return _.sortBy(retVal, "comment_count").reverse();
};

// export the worker function as a nodejs module
module.exports = worker;
