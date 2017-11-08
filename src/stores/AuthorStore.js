let Dispatcher = require('../dispatcher/appDispatcher');
let ActionTypes = require('../constants/actionTypes');
let EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');
let _ = require('lodash');

const CHANGE_EVENT = 'change';
let _authors = [];

class AuthorStore {

    static getEmitter() {
        return new EventEmitter();
    }

    static addChangeListener(callback) {
        AuthorStore.getEmitter().on(CHANGE_EVENT, callback);
    }

    static removeChangeListener(callback) {
        AuthorStore.getEmitter().removeListener(CHANGE_EVENT, callback);
    }

    static emitChange() {
        AuthorStore.getEmitter().emit(CHANGE_EVENT);
    }

    static getAllAuthors() {
        return _authors;
    }

    static getAuthorById(id) {
        return _.find(_authors, {id: id});
    }
}

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            let existingAuthor = _.find(_authors, {id: action.author.id});
            let index = _.indexOf(_authors, existingAuthor);
            _authors.splice(index, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function (author) {
               return action.id === author.id
            });
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
    }
});

module.exports = AuthorStore;