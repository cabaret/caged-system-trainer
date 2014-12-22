var React = require('react');

var Headline = require('./Headline.jsx');
var Scale = require('./Scale.jsx');
var RootNote = require('./RootNote.jsx');
var Shape = require('./Shape.jsx');

var boxes = require('./boxes.json');

var shapes = ['C', 'A', 'G', 'E', 'D'];
var rootNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

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
        </section>
      </div>
    );
  }
});

module.exports = App;