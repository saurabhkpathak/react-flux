"use strict";

$ = jQuery = require('jquery');

var Api = {};

Api.getAllUsers = function() {
    var defer = $.Deferred();
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users',
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

Api.getUserById = function(id) {
    var defer = $.Deferred();
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/users/' + id,
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
