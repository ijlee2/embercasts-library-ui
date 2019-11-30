import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { normalizeDate } from 'ember-embercasts-library-ui/utils/date';

export default class BookFormComponent extends Component {
    @service store;
    @tracked selectedAuthor;

    constructor() {
        super(...arguments);

        const { title, isbn, publicationDate, author } = this.args.book;

        this.title = title;
        this.isbn = isbn;
        this.publicationDate = (publicationDate || '').substring(0, 10);
        this.selectedAuthor = author;
    }

    @action
    async searchAuthor(query) {
        const authors = await this.store.query('author', {
            filter: { query }
        });

        return authors.toArray();
    }

    @action
    selectAuthor(author) {
        this.selectedAuthor = author;
    }

    @action
    submitChanges(event) {
        event.preventDefault();

        this.args.onSubmit({
            title: this.title,
            isbn: this.isbn,
            publicationDate: normalizeDate(this.publicationDate),
            author: this.selectedAuthor
        });
    }
}