let React = require('react');
let TextInput = require('../common/TextInput');

class AuthorForm extends React.Component {

    render() {
        return (
            <form>
                <h1>Manage Author</h1>
                <TextInput label='First Name'
                       name='firstName'
                       value={this.props.author.firstName}
                       onChange={this.props.onChange}/>
                <br/>
                <label htmlFor='lastName'>Last name</label>
                <TextInput label='Last Name'
                           name='lastName'
                           value={this.props.author.lastName}
                           onChange={this.props.onChange}/>
                <br/>
                <input type='submit' value='Save' className='btn btn-primary'/>
            </form>
        );
    }
}

module.exports = AuthorForm;