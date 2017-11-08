import Dispatcher from '../dispatcher/appDispatcher';
import AuthorAPI from '../api/authorAPI';
import ActionTypes from '../constants/actionTypes';

export default class InitializeActions {

    static initApp() {
        Dispatcher.dispatch({
           actionType: ActionTypes.INITIALIZE,
            initialData: {
               authors: AuthorAPI.getAllAuthors()
            }
        });
    }
}