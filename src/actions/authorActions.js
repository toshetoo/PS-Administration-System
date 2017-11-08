let Dispatcher = require('../dispatcher/appDispatcher');
let AuthorAPI = require('../api/authorAPI');
let ActionTypes = require('../constants/actionTypes');

let AuthorActions = {
    createAuthor(author) {
        let newAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor(author) {
        let updatedAuthor = AuthorAPI.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor(id) {
        AuthorAPI.deleteAuthor(id);
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        })
    }

};

module.exports = AuthorActions;