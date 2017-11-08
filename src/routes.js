import React from 'react';
import Router from 'react-router';
let DefaultRoute = Router.DefaultRoute;
let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;
let Redirect = Router.Redirect;
import App from './components/App';
import Home from './components/Home';
import Author from './components/authors/Author';
import About from './components/about/About';
import ManageAuthor from './components/authors/ManageAuthor';
import NotFoundPage from './components/NotFoundPage';

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute handler={Home}/>
        <Route name="authors" handler={Author}/>
        <Route name="about" handler={About}/>
        <Route name="addAuthor" path='author' handler={ManageAuthor}/>
        <Route name="editAuthor" path='author/:id' handler={ManageAuthor}/>
        <NotFoundRoute handler={NotFoundPage}/>
        <Redirect from='about-us' to='about'/>
        <Redirect from='awthurs' to='authors'/>
        <Redirect from='about/*' to='about'/>
    </Route>
);

export default routes;