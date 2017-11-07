let React = require('react');
let Router = require('react-router');
let AuthorAPI = require('../../api/authorAPI');
let AuthorList = require('./AuthorList');
let AuthorForm = require('./AuthorForm');
let toastr = require('toastr');

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

    saveAuthor(event) {
        event.preventDefault();
        AuthorAPI.saveAuthor(this.state.author);
        toastr.success('Author added successfully!');
        Router.History.back();
    }

    render() {
        return (
            <div>
                <AuthorForm author={this.state.author}
                            onChange={this.setAuthorState.bind(this)}
                            onSave={this.saveAuthor.bind(this)}/>
            </div>
        );
    }
}

module.exports = ManageAuthor;