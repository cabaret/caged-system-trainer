var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

function getTimeLeft() {
  return {
    timeLeft: AppStore.getTimeLeft()
  }
}

var Timer = React.createClass({
  _tick: function() {
    this.setState({ timeLeft: this.state.timeLeft - 1 });
    if (this.state.timeLeft < 0) {
      AppActions.changePattern();
      clearInterval(this.interval);
    }
  },
  _onChange: function() {
    this.setState(getTimeLeft());
    this.interval = setInterval(this._tick, 1000);
  },
  getInitialState: function() {
    return getTimeLeft();
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
    AppStore.removeChangeListener(this._onChange);
  },
  componentDidMount: function() {
    this.interval = setInterval(this._tick, 1000);
  },
  render: function() {
    return (
      <small className="timer">
        ({ this.state.timeLeft })
      </small>
    )
  }
});

module.exports = Timer;