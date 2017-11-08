import React from 'react';
import Router from 'react-router';
let Link = Router.Link;

export default class NotFoundPage extends React.Component {

    render() {
        return (
            <div>
                <p>Woops, nothing to see here</p>
                <Link to="app" className='btn btn-primary'>Back to home</Link>
            </div>
        );
    }
}