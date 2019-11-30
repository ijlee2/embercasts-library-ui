import Route from '@ember/routing/route';

export default class BooksDetailsIndexRoute extends Route {
    model() {
        return this.modelFor('books.details');
    }
}