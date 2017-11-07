let React = require('react');

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
                            <td><a href={'/authors/' + author.id}>{author.firstName} {author.lastName}</a></td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

module.exports = AuthorList;