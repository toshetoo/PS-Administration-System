//This file is mocking a web API by hitting hard coded data.
import data from './authorData';
let authors = data.authors;

export default class AuthorApi {

    //This would be performed on the server in a real app. Just stubbing in.
    static generateId(author) {
        return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
    };

    static clone(item) {
        return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
    };

    static getAllAuthors() {
        return AuthorApi.clone(authors);
    };

    static getAuthorById(id) {
        let author = authors.filter(author => author.id === id);
        return AuthorApi.clone(author);
    };

    static saveAuthor(author) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the author to the DB via AJAX call...');

        if (author.id) {
            let existingIndex = authors.map(auth => {
                return auth.id
            }).indexOf(author.id);
            authors.splice(existingIndex, 1, author);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            author.id = this.generateId(author);
            authors.push(author);
        }

        return AuthorApi.clone(author);
    };

    static deleteAuthor(id) {
        console.log('Pretend this just deleted the author from the DB via an AJAX call...');
        let existingIndex = authors.map(author => {
            return author.id
        }).indexOf(id);
        authors.splice(existingIndex, 1);
    };
}