"use strict";

var React = require('react');

var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string,
        onChange: React.PropTypes.func.isRequired,
        value: React.PropTypes.string
    },
    render: function() {
        return (
            <div className="col-md-12">
                <label>{this.props.name}</label>
                <input type={this.props.type} placeholder={this.props.placeholder} className="form-control" name={this.props.name} value={this.props.value} onChange={this.props.onChange} />
                <div className="input">{this.props.error}</div>
            </div>
        );
    }
});

module.exports = TextInput;
