import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class BooksDetailsNewReviewController extends Controller {
    @action
    cancelForm() {
        this.transitionToRoute('books.details', this.model.book.id);
    }

    @action
    saveReview(formFields) {
        const review = this.store.createRecord('review', formFields);

        review
            .save()
            .then(() => {
                this.transitionToRoute('books.details', this.model.book.id);
            });
    }
}