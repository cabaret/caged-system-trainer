var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

function getShape() {
  return {
    shape: AppStore.getPattern().shape
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
      </div>
    );
  }
});

module.exports = Shape;