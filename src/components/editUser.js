"use strict";

var React = require('react');

var EditUser = React.createClass({
    render: function() {
        return (
            <form>
                <label>Name</label>
                <input type="text" placeholder="Name" className="form-control" name="name" value={this.props.user.name} onChange={this.props.onChange} />
                <label>Phone</label>
                <input type="text" placeholder="Phone" className="form-control" name="phone" value={this.props.user.phone} onChange={this.props.onChange} />
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

module.exports = EditUser;
