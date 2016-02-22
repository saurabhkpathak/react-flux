"use strict";

var React = require('react');
var ApiWrapper = require('./api/apiFile');

var User = React.createClass({
    getInitialState: function() {
        return {
            currentUser: {}
        }
    },
    getUserDetails: function() {
        var self = this;
        ApiWrapper.getUserById(this.props.params.id).done(function(data) {
            self.setState({
                currentUser: data
            });
        }).fail(function(data) {
            self.setState({
                currentUser: data
            });
        });
    },
    componentWillMount: function() {
        this.getUserDetails();
    },
    render: function() {
        return (
            <div className='row'>
                <div className="col-md-12">{this.state.currentUser.name}</div>
                <div className="col-md-12">{this.state.currentUser.phone}</div>
                <div className="col-md-12">{this.state.currentUser.username}</div>
                <div className="col-md-12">{this.state.currentUser.email}</div>
            </div>
        );
    }
});

module.exports = User;
