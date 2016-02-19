$ = jQuery = require('jquery');

var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/aboutPage');
var Header = require('./components/common/header');

var ApiWrapper = require('./components/api/apiFile');

var App = React.createClass({
    render: function() {
        var Child, source = 'http://jsonplaceholder.typicode.com/posts';
        if (this.props.route === 'about') {
            Child = About;
        } else {
            Child = Home;
        }
        return (
            <div>
                <Header />
                <Child source={source} />
            </div>
        )
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
