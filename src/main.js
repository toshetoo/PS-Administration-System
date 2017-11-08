let React = require('react');
let Router = require('react-router');
let routes = require('./routes');
let InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'))
});