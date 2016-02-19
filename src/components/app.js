var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        var source = 'http://jsonplaceholder.typicode.com/posts';
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        )
    }
});

module.exports = App;
