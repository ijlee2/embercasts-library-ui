import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Route | books/details/new-review', function(hooks) {
    setupTest(hooks);

    test('it exists', function(assert) {
        let route = this.owner.lookup('route:books/details/new-review');
        assert.ok(route);
    });
});