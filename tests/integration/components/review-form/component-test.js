import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | review-form', function(hooks) {
    setupRenderingTest(hooks);

    test('should render', async function(assert) {
        this.review = {
            user: 'Terrence Deacon',
            body: 'I thought that the book was amazing!',
            book: {
                title: 'Harry Potter and the Philosopher\'s Stone',
                isbn: '0747532699',
                publicationDate: '1997-06-26',
                author: {
                    firstName: 'J.K.',
                    lastName: 'Rowling'
                }
            }
        };

        this.onCancel = () => {};
        this.onSubmit = () => {};

        await render(hbs`
            <ReviewForm
                @review={{this.review}}
                @onCancel={{this.onCancel}}
                @onSubmit={{this.onSubmit}}
            />
        `);

        assert.ok(true);
    });
});