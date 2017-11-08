import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import Events from 'events';
let EventEmitter = Events.EventEmitter;

const CHANGE_EVENT = 'change';
let _authors = [];

export default class AuthorStore {
    static addChangeListener(callback) {
        AuthorStore.emitter.on(CHANGE_EVENT, callback);
    }

    static removeChangeListener(callback) {
        AuthorStore.emitter.removeListener(CHANGE_EVENT, callback);
    }

    static emitChange() {
        AuthorStore.emitter.emit(CHANGE_EVENT);
    }

    static getAllAuthors() {
        return _authors;
    }

    static getAuthorById(id) {
        return _authors.find(author => author.id === id);
    }
}

AuthorStore.emitter = new EventEmitter();

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            let existingAuthor = _authors.find(auth => auth.id === action.author.id);
            let index =_authors.map(auth => {
                return auth.id
            }).indexOf(existingAuthor.id);
            _authors.splice(index, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            let existingIndex = _authors.map(author => {
                return author.id
            }).indexOf(action.id);
            _authors.splice(existingIndex, 1);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
    }
});