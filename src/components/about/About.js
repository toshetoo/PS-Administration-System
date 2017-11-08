import React from 'react';

export default class About extends React.Component {

      static willTransitionTo(transition, params, query, callback) {
          if(!confirm('Are you sure you want to read this page?')) {
              transition.abort();
          } else {
              callback();
          }
      }

    static willTransitionFrom(transition, component) {
        if(!confirm('Are you sure you want to leave this page?')) {
            transition.abort();
        }
    }


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