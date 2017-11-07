let React = require('react');
let Router = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let App = require('./components/App');

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={require('./components/Home')} />
        <Route name="authors" handler={require('./components/authors/Author')} />
        <Route name="about" handler={require('./components/about/About')} />
    </Route>
);

module.exports = routes;