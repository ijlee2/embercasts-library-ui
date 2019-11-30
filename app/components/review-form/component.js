import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class ReviewFormComponent extends Component {
    constructor() {
        super(...arguments);

        const { user, body, book } = this.args.review;

        this.user = user;
        this.body = body;
        this.book = book;
    }

    @action
    submitChanges(event) {
        event.preventDefault();

        this.args.onSubmit({
            user: this.user,
            body: this.body,
            book: this.book
        });
    }
}