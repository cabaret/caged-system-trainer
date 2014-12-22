var Dispatcher = require('flux').Dispatcher;
var merge = require('react/lib/Object.assign');

var AppDispatcher = merge(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;