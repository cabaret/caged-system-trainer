/** @jsx React.DOM */

var React = require('react');

// Enable React Dev Tools
typeof window !== "undefined" && (window.React = React)

var App = require('./App.jsx');

React.render(<App />, document.getElementById('app'));