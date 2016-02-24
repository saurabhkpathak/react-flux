"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EditUser = require('./editUser');
var ApiWrapper = require('./api/apiFile');

var ManageUser = React.createClass({
    getUserDetails: function() {
        var self = this;
        ApiWrapper.getUserById(2).done(function(data) {
            self.setState({
                user: data
            });
        }).fail(function(data) {
            self.setState({
                user: data
            });
        });
    },
    getInitialState: function() {
        this.getUserDetails();
        return {
            user: {}
        }
    },
    setUser: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user[field] = value;
        this.setState({user: this.state.user});
    },
    saveUser: function(event) {
        event.preventDefault();
        ApiWrapper.saveUser(this.state.user).done(function() {
            alert('user saved');
        }).fail(function() {
            alert('user save failed');
        });
    },
    render: function() {
        return (
            <EditUser user={this.state.user} onChange={this.setUser} onSave={this.saveUser}/>
        );
    }
})

module.exports = ManageUser;
