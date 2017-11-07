let React = require('react');
let Router = require('react-router');
let routes = require('./routes');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'))
});