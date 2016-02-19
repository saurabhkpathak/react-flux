"use strict";

var React = require('react');
var ApiWrapper = require('./api/apiFile');

var Post = React.createClass({
    getInitialState: function() {
        return {
            currentPost: undefined
        }
    },
    getPostDetails: function() {
        var self = this;
        ApiWrapper.getPostById(this.props.params.id).done(function(data) {
            self.setState({
                currentPost: data
            });
        }).fail(function(data) {
            self.setState({
                currentPost: data
            });
        });
    },
    componentWillMount: function() {
        this.getPostDetails();
    },
    render: function() {
        return (
            <div>
                {this.state.currentPost}
            </div>
        );
    }
});

module.exports = Post;
