import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import fade from 'ember-animated/transitions/fade';

export default class NewAuthorModalComponent extends Component {
    @service store;

    @tracked author;
    @tracked isModalShown = false;

    constructor() {
        super(...arguments);

        this.author = {
            firstName: '',
            lastName: ''
        };
    }

    transitionForModal = fade;

    @action
    hideModal() {
        this.isModalShown = false;
    }

    @action
    showModal() {
        this.isModalShown = true;
    }

    @action
    saveAuthor(event) {
        event.preventDefault();

        const author = this.store.createRecord('author', this.author);

        author
            .save()
            .then(() => {
                this.isModalShown = false;

                this.args.onSave(author);
            });
    }
}