const React = require('react');
const LeftNav = require('material-ui/lib/left-nav');
const MenuItem = require('material-ui/lib/menu/menu-item');

const RaisedButton = require('material-ui/lib/raised-button');


function test(){
  console.log('TEST')
}

const SideBar = React.createClass({
  toggleMenu: function(){
    console.log("toggling menu")
  }
  , render() {
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
    return (
        <LeftNav
          docked={true}
          menuItems={menuItems}
          openRight={true} />
    );
  },
});


module.exports = SideBar;
