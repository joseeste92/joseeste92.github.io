var React = require('react');

var NavBar = require('./NavBar');
var Cover = require('./Cover');
var Text = require('./Text');
var Carrousel = require('./carrousel');

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <NavBar />
        <Cover />
        <Text />
        <Carrousel />
      </div>
    );
  }
}) 

module.exports = App;
