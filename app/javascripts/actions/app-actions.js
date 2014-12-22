var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  changePattern: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CHANGE_PATTERN
    })
  },
  startTimer: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.START_TIMER
    })
  },
  stopTimer: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.STOP_TIMER
    })
  }
};

module.exports = AppActions;