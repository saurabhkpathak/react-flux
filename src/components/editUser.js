"use strict";

var React = require('react');

var EditUser = React.createClass({
    render: function() {
        return (
            <form>
                <label>Name</label>
                <input type="text" placeholder="Name" className="form-control" />
                <label>Phone</label>
                <input type="number" placeholder="Phone" className="form-control" />
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
});

module.exports = EditUser;
