"use strict";

var React = require('react');
var TextInput = require('./common/textInput');

var EditUser = React.createClass({
    render: function() {
        return (
            <form>
                <TextInput name="name" type="text" placeholder="Enter Name" onChange={this.props.onChange} value={this.props.user.name} />
                <TextInput name="phone" type="text" placeholder="Enter Phone" onChange={this.props.onChange} value={this.props.user.phone} />
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

module.exports = EditUser;
