import React from 'react';
import Router from 'react-router';
import routes from './routes';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'))
});