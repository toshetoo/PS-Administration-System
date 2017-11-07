let React = require('react');
let Router = require('react-router');
let Link = Router.Link;

class AuthorList extends React.Component {

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(author => {
                        return <tr key={author.id}>
                            <td>{author.id}</td>
                            <td><Link to='editAuthor' params={{id: author.id}} />{author.name}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = AuthorList;