"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name='about' handler={require('./components/aboutPage')} />
        <Route name='user' path='user/:id' handler={require('./components/userPage')} />
        <Route name='manageUser' path='edit' handler={require('./components/userForm')} />
    </Route>
);

module.exports = routes;
