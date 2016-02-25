"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var EditUser = require('./editUser');
var ApiWrapper = require('./api/apiFile');
var toastr = require('toastr');

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
            user: {},
            error: {}
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
        if (!this.isFormValid()) {
            return;
        }
        ApiWrapper.saveUser(this.state.user).done(function() {
            toastr.success('user saved');
        }).fail(function() {
            toastr.error('user save failed');
        });
    },
    isFormValid: function() {
        var valid = true;
        this.state.error = {};
        if (this.state.user.name.length < 3) {
            this.state.error.name = 'Name cannot be shorted than 3 characters.';
            valid = false;
        }
        if (this.state.user.phone.length !== 10) {
            this.state.error.phone = 'Phone number cannot be shorted than 10 characters.';
            valid = false;
        }
        this.setState({
            error: this.state.error
        });
        return valid;
    },
    render: function() {
        return (
            <EditUser user={this.state.user} onChange={this.setUser} onSave={this.saveUser} error={this.state.error}/>
        );
    }
})

module.exports = ManageUser;
