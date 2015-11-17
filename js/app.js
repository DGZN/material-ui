const React = require('react');

const AppBar = require('material-ui/lib/app-bar');

const LeftNav = require('material-ui/lib/left-nav');
const MenuItem = require('material-ui/lib/menu/menu-item');
const RaisedButton = require('material-ui/lib/raised-button');


menuItems = [
  {
     type: MenuItem.Types.LINK,
     payload: 'https://github.com/callemall/material-ui',
     text: 'GitHub'
  },
  {
     text: 'Disabled',
     disabled: true
  },
  {
     type: MenuItem.Types.LINK,
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true
  },
];

const App = React.createClass({
  getInitialState: function(){
    return {
      style: {
        "width": '512px'
      }
    }
  }
, toggleMenu: function(){
    this.refs.leftNav.toggle();
  }
, render() {
    return (
        <div>
          <RaisedButton label="Open Nav" primary={false} secondary={true} onClick={this.toggleMenu}  />
          <LeftNav
            ref="leftNav"
            docked={true}
            menuItems={menuItems}
            openRight={true}
            data={this.state} />
        </div>
    );
  },
});

module.exports = App;
