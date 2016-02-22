"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <header className='clearfix'>
                <span className="col-md-4"><Link to='about'>About</Link></span>
                <span className="col-md-4"><Link to='app'>Home</Link></span>
                <span className="col-md-4"><Link to="manageUser">User Form</Link></span>
            </header>
        );
    }
})

module.exports = Header;
