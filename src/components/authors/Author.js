let React = require('react');
let Router = require('react-router');
let Link = Router.Link;
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
                <Link to='addAuthor' className='btn btn-default'>Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

module.exports = Author;