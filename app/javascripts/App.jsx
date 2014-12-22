var React = require('react');

var Headline = require('./components/Headline.jsx');
var Scale = require('./components/Scale.jsx');
var RootNote = require('./components/RootNote.jsx');
var Shape = require('./components/Shape.jsx');
var Timer = require('./components/Timer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <Headline />
          <Scale />
        </header>
        <section>
          <RootNote />
          <Shape />
          <Timer />
        </section>
      </div>
    );
  }
});

module.exports = App;