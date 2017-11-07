let React = require('react');

class Home extends React.Component {

    render() {
        return (
            <div className='jumbotron'>
                <h1>PS Administration</h1>
                <p>React, React router, Flux for ultra-responsive web apps.</p>
            </div>
        );
    }
}

module.exports = Home;