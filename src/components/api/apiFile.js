"use strict";

$ = jQuery = require('jquery');

var Api = {};

Api.getAllPosts = function() {
    var defer = $.Deferred();
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/posts',
        method: 'GET'
    })
    .success(function(response) {
        defer.resolve(response);
    })
    .error(function(error) {
        defer.reject(error);
    });
    return defer.promise();
};

module.exports = Api;
