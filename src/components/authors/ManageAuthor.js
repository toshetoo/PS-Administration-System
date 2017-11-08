import React from 'react';
import Router from 'react-router';
import AuthorActions from '../../actions/authorActions';
import AuthorStore from '../../stores/AuthorStore';
import AuthorForm from './AuthorForm';
import toastr from 'toastr';

export default class ManageAuthor extends React.Component {

    static willTransitionFrom(transition, component) {
        if (component.state.dirty && !confirm('Leave without saving?')) {
            transition.abort();
        }
    }


    constructor(props) {
        super(props);
        this.state = {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    }

    componentWillMount() {
        let authorID = this.props.params.id;
        if (authorID) {
            this.setState({
                author: AuthorStore.getAuthorById(authorID)
            });
        }
    }

    setAuthorState(event) {
        this.setState({
            dirty: true
        });

        this.state.author[event.target.name] = event.target.value;
        this.setState({
            author: this.state.author,
            dirty: true
        });
    }

    saveAuthor(event) {
        event.preventDefault();
        if (!this.authorFormIsValid()) {
            return;
        }

        if (this.state.author.id) {
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }

        toastr.success('Author added successfully!');
        this.setState({
            dirty: false
        });
        Router.History.back();
    }

    authorFormIsValid() {
        let isValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3) {
            isValid = false;
            this.state.errors.firstName = 'Too short name';
        }

        if (this.state.author.lastName.length < 3) {
            isValid = false;
            this.state.errors.lastName = 'Too short name';
        }

        this.setState({
            errors: this.state.errors
        });

        return isValid;
    }


    render() {
        return (
            <div>
                <AuthorForm author={this.state.author}
                            onChange={this.setAuthorState.bind(this)}
                            onSave={this.saveAuthor.bind(this)}
                            errors={this.state.errors}/>
            </div>
        );
    }
}