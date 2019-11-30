import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Controller | books/details/new-review', function(hooks) {
    setupTest(hooks);

    // Replace this with your real tests.
    test('it exists', function(assert) {
        let controller = this.owner.lookup('controller:books/details/new-review');
        assert.ok(controller);
    });
});