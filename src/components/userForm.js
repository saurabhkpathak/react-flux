"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EditUser = require('./editUser');

var ManageUser = React.createClass({
    render: function() {
        return (
            <EditUser />
        );
    }
})

module.exports = ManageUser;
