import React from 'react';
import Router from 'react-router';
import Header  from './common/Header';
import JQuery from 'jquery';
let $ = JQuery;
let RouteHandler = Router.RouteHandler;


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container-fluid'>
                    <RouteHandler />
                </div>
            </div>
        );
    }
}