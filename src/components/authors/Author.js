let React = require('react');
let AuthorAPI = require('../../api/authorAPI');
let AuthorList = require('./AuthorList');

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorAPI.getAllAuthors()
        };
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

module.exports = Author;