let React = require('react');
let Router = require('react-router');
let Link = Router.Link;

class Home extends React.Component {

    render() {
        return (
            <div className='jumbotron'>
                <h1>PS Administration</h1>
                <p>React, React router, Flux for ultra-responsive web apps.</p>
                <Link to="about" className='btn btn-primary'>About</Link>
            </div>
        );
    }
}

module.exports = Home;