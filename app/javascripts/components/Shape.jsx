var React = require('react');

var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

var Box = require('../components/Box.jsx');

function getShape() {
  return {
    shape: AppStore.getPattern().shape,
    boxShape: AppStore.getPattern().boxShape
  };
}

var Shape = React.createClass({
  getInitialState: function() {
    return getShape();
  },
  _onChange: function() {
    this.setState(getShape());
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  render: function() {
    return (
      <div>
        <p className="shape">
          { this.state.shape }
          <small>-Shape</small>
        </p>
        <Box box={ this.state.boxShape } />
      </div>
    );
  }
});

module.exports = Shape;