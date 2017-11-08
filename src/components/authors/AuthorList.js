let React = require('react');
let Router = require('react-router');
let Link = Router.Link;
let AuthorActions = require('../../actions/authorActions');
let toastr = require('toastr');

class AuthorList extends React.Component {

    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author deleted');
    }


    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(author => {
                        return <tr key={author.id}>
                            <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                            <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
                            <td>{author.firstName} {author.lastName}</td>
                        </tr>;
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = AuthorList;