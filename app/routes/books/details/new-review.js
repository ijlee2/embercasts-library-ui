import Route from '@ember/routing/route';

export default class BooksDetailsNewReviewRoute extends Route {
    model() {
        const book = this.modelFor('books.details');

        return {
            book,
            review: {
                user: '',
                body: '',
                book
            }
        };
    }
}