var React = require('react');
var AppStore = require('../stores/app-store.js');
var AppActions = require('../actions/app-actions.js');

function getRootNote() {
  return {
    rootNote: AppStore.getPattern().rootNote
  };
}

var RootNote = React.createClass({
  getInitialState: function() {
    return getRootNote()
  },
  _onChange: function() {
    this.setState(getRootNote());
  },
  componentWillMount: function() {
    AppStore.addChangeListener(this._onChange);
  },
  render: function() {
    return (
      <p className="root-note">{ this.state.rootNote }</p>
    );
  }
});

module.exports = RootNote;