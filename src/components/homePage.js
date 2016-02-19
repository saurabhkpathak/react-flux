"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>This is an Author Details App</h1>
                <a href="/#about">About</a>
            </div>
        );
    }
});

module.exports = Home;
