import Dispatcher from '../dispatcher/appDispatcher';
import AuthorAPI from '../api/authorAPI';
import ActionTypes from '../constants/actionTypes';

export default class AuthorActions {
    static createAuthor(author) {
        let newAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }

    static updateAuthor(author) {
        let updatedAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }

    static deleteAuthor(id) {
        AuthorAPI.deleteAuthor(id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        })
    }

}