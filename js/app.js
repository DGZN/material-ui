const React = require('react');

const AppBar = require('material-ui/lib/app-bar');

const LeftNav = require('material-ui/lib/left-nav');
const MenuItem = require('material-ui/lib/menu/menu-item');
const RaisedButton = require('material-ui/lib/raised-button');

const Card = require('material-ui/lib/card/card');
const CardActions = require('material-ui/lib/card/card-actions');
const CardExpandable = require('material-ui/lib/card/card-expandable');
const CardHeader = require('material-ui/lib/card/card-header');
const CardMedia = require('material-ui/lib/card/card-media');
const CardText = require('material-ui/lib/card/card-text');
const CardTitle = require('material-ui/lib/card/card-title');

const Avatar = require('material-ui/lib/avatar');
const FlatButton = require('material-ui/lib/flat-button');

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
          <Card>
            <CardHeader
              title="Title"
              subtitle="Subtitle"
              avatar={<Avatar>A</Avatar>}/>
            <CardHeader
              title="Demo Url Based Avatar"
              subtitle="Subtitle"
              avatar="http://lorempixel.com/100/100/nature/"/>
            <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
              <img src="http://lorempixel.com/600/337/nature/"/>
            </CardMedia>
            <CardTitle title="Title" subtitle="Subtitle"/>
            <CardActions>
              <FlatButton label="Action1"/>
              <FlatButton label="Action2"/>
            </CardActions>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
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
