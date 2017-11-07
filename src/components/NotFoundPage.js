let React = require('react');
let Router = require('react-router');
let Link = Router.Link;

class NotFoundPage extends React.Component {

    render() {
        return (
            <div>
                <p>Woops, nothing to see here</p>
                <Link to="app" className='btn btn-primary'>Back to home</Link>
            </div>
        );
    }
}

module.exports = NotFoundPage;