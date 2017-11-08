import React from 'react';
import Router from 'react-router';
let Link = Router.Link;
import AuthorStore from '../../stores/AuthorStore';
import AuthorList from './AuthorList';

export default class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorStore.getAllAuthors()
        };
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this.onChange.bind(this));
    }

    onChange() {
        this.setState({
            authors: AuthorStore.getAllAuthors()
        });
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