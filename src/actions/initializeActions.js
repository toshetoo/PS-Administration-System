let Dispatcher = require('../dispatcher/appDispatcher');
let AuthorAPI = require('../api/authorAPI');
let ActionTypes = require('../constants/actionTypes');

class InitializeActions {

    static initApp() {
        Dispatcher.dispatch({
           actionType: ActionTypes.INITIALIZE,
            initialData: {
               authors: AuthorAPI.getAllAuthors()
            }
        });
    }
}

module.exports = InitializeActions;
