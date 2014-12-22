var AppDispatcher = require('../dispatchers/app-dispatcher.js');
var AppConstants = require('../constants/app-constants.js');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/Object.assign');

var CHANGE_EVENT = "change";

var shapes = ['C', 'A', 'G', 'E', 'D'];
var rootNotes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

var boxShapes = require('../data/boxShapes.json');

var _timeLeft = 60;
var _pattern = _setPattern();

function _setPattern() {
  var rootNote = _getRootNote();
  var shape = _getShape();
  var boxShape = _getBoxForShape(shape);

  _pattern = {
    rootNote: rootNote,
    shape: shape,
    boxShape: boxShape
  };

  return _pattern;
}

function _getRootNote() {
  return rootNotes[Math.floor(Math.random() * rootNotes.length)];
}

function _getShape() {
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function _getBoxForShape(shape) {
  return boxShapes[shape];
}

var AppStore = merge(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getTimeLeft: function() {
    return _timeLeft;
  },
  getPattern: function() {
    return _pattern;
  },
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {
      case AppConstants.START_TIMER:
        break;
      case AppConstants.STOP_TIMER:
        break;
      case AppConstants.CHANGE_PATTERN:
        _setPattern();
        break;
    }

    AppStore.emitChange();

    return true;
  })
});

module.exports = AppStore;