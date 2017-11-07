let React = require('react');
let AuthorAPI = require('../../api/authorAPI');
let AuthorList = require('./AuthorList');
let AuthorForm = require('./AuthorForm');

class ManageAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            author: {id: '', firstName: '', lastName: ''}
        }
    }

    setAuthorState(event) {
        this.state.author[event.target.name] = event.target.value;
        this.setState({
            author: this.state.author
        })
    }

    render() {
        return (
            <div>
                <AuthorForm author={this.state.author} onChange={this.setAuthorState.bind(this)}/>
            </div>
        );
    }
}

module.exports = ManageAuthor;