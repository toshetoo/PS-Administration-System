import React from 'react';
import TextInput from '../common/TextInput';

export default class AuthorForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.onSave}>
                <h1>Manage Author</h1>
                <TextInput label='First Name'
                           name='firstName'
                           value={this.props.author.firstName}
                           onChange={this.props.onChange}
                           error={this.props.errors.firstName}/>
                <br/>
                <label htmlFor='lastName'>Last name</label>
                <TextInput label='Last Name'
                           name='lastName'
                           value={this.props.author.lastName}
                           onChange={this.props.onChange}
                           error={this.props.errors.lastName}/>
                <br/>
                <input type='submit' value='Save' className='btn btn-primary'/>
            </form>
        );
    }
}