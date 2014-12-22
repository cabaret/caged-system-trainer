var React = require('react');
var Line = require('./Line.jsx');

var FRET_WIDTH = 120;

var Box = React.createClass({
  render: function() {
    var viewBoxWidth= (FRET_WIDTH * this.props.box.span) + 1
    var lines = this.props.box.shape.map(function(line, i) {
      return (
        <Line notes={line} key={i} offset={i} />
      )
    });

    return (
      <div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="150px" viewBox={"0 0 " + viewBoxWidth + " 201"}>
          <path fill="#FFFFFF" stroke="#000000" d="M120.5,200.5H0.5V0.5h120V200.5z M240.5,0.5h-120v200h120V0.5z M360.5,0.5h-120v200h120V0.5z M480.5,0.5h-120v200h120V0.5z M600.5,0.5h-120v200h120V0.5z M600.5,0.5H0.5v40h600V0.5z M600.5,40.5 H0.5v40h600V40.5z M600.5,80.5H0.5v40h600V80.5z M600.5,120.5H0.5v40h600V120.5z"/>
          { lines }
        </svg>
      </div>
    )
  }
});

module.exports = Box