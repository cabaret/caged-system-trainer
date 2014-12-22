var React = require('react');

var Note = require('./Note.jsx');

var STRING_HEIGHT = 40;
var FRET_WIDTH = 120;
var NOTE_WIDTH = 60;

var Line = React.createClass({
  render: function() {
    var cy = (this.props.offset) * STRING_HEIGHT;
    var notes = this.props.notes.map(function(note, i) {
      if(note !== 0) {
        var cx = FRET_WIDTH * (i+1) - NOTE_WIDTH
        return (
          <Note note={note} key={i} cy={cy} cx={cx}/>
        );
      }
    });
    return (
      <g>{ notes }</g>
    )
  }
});

module.exports = Line;