const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');


const Button = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

module.exports = Button;
