let React = require('react');
let Router = require('react-router');
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;
let Redirect = Router.Redirect;
let App = require('./components/App');

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={require('./components/Home')} />
        <Route name="authors" handler={require('./components/authors/Author')} />
        <Route name="about" handler={require('./components/about/About')} />
        <NotFoundRoute handler={require('./components/NotFoundPage')}/>
        <Redirect from='about-us' to='about'/>
        <Redirect from='awthurs' to='authors'/>
        <Redirect from='about/*' to='about'/>
    </Route>
);

module.exports = routes;