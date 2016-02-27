"use strict";

var React = require('react');
var ApiWrapper = require('./api/apiFile');
var Router = require('react-router');

var User = React.createClass({
    mixins : [Router.Navigation],
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
    redirect: function(e) {
      e.preventDefault();
      this.transitionTo('about');
    },
    render: function() {
        return (
            <div className='row'>
                <div className="col-md-12">{this.state.currentUser.name}</div>
                <div className="col-md-12">{this.state.currentUser.phone}</div>
                <div className="col-md-12">{this.state.currentUser.username}</div>
                <div className="col-md-12">{this.state.currentUser.email}</div>
                <button onClick={this.redirect}>go</button>
            </div>
        );
    }
});

module.exports = User;
