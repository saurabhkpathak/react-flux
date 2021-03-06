"use strict";

var React = require('react');
var TextInput = require('./common/textInput');

var EditUser = React.createClass({
    render: function() {
        return (
            <form>
                <TextInput name="name" type="text" placeholder="Enter Name" onChange={this.props.onChange} value={this.props.user.name} error={this.props.error.name}/>
                <TextInput name="phone" type="text" placeholder="Enter Phone" onChange={this.props.onChange} value={this.props.user.phone} error={this.props.error.phone}/>
                <button className="btn btn-primary" onClick={this.props.onSave}>Submit</button>
            </form>
        );
    }
});

module.exports = EditUser;
