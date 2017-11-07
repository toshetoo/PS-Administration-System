let React = require('react');

class About extends React.Component {

    render() {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This app uses the following technologies
                    <ul>
                        <li>React</li>
                        <li>React router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
}

module.exports = About;