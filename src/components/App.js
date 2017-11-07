let React = require('react');
let Header = require('./common/Header');
let RouteHandler = require('react-router').RouteHandler;
$ = require('jquery');

class App extends React.Component {
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

module.exports = App;