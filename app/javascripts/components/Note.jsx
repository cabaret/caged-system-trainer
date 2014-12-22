var React = require('react');

var NOTE_RADIUS = 18;

var Note = React.createClass({
  render: function() {
    var fill = '#000000';
    if(this.props.note == 2) {
      fill = '#FF0000';
    }
    return (
      <circle fill={fill} cx={ this.props.cx } cy={ this.props.cy } r={ NOTE_RADIUS }/>
    )
  }
});

module.exports = Note;