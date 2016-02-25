"use strict";

var React = require('react');
var ApiWrapper = require('../components/api/apiFile');
var Router = require('react-router');
var Link = Router.Link;

var About = React.createClass({
    getInitialState: function() {
        return {
            data: undefined
        };
    },
    renderAsyncData: function() {
        var data, self = this;
        ApiWrapper.getAllUsers().done(function(response) {
            data = response;
            self.setState({
                data: data
            });
        }).fail(function(error) {
            data = error;
            self.setState({
                data: data
            });
        });
    },
    componentWillMount: function() {
        this.renderAsyncData();
    },
    shouldComponentUpdate: function(nextProps, nextState){
        return this.state.data !== nextState.data;
    },
    render: function() {
        if (this.state.data && this.state.data.length) {
            return (
                <div className="jumbotron">
                    <p>About Page</p>
                    <ul>
                        {this.state.data.map(function(current) {
                            return <li key={current.id}>
                                <Link className='col-md-4' to='user' params={{id: current.id}}>{current.name}</Link>
                                <Link className='col-md-4' to='manageUser' params={{id: current.id}}>Edit User</Link>
                                </li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="jumbotron">
                    No result found.
                </div>
            );
        }
    }
});

module.exports = About;
