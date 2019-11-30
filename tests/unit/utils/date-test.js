import { normalizeDate, denormalizeDate } from 'ember-embercasts-library-ui/utils/date';
import { module, test } from 'qunit';

module('Unit | Utility | date', function() {
    test('normalizeDate works', function(assert) {
        // TODO: Mock new Date() to account for timezome where test is run
        assert.ok(
            normalizeDate('2000-12-31'),
        );
    });

    test('denormalizeDate works', function(assert) {
        assert.strictEqual(
            denormalizeDate(normalizeDate('0009-12-31')),
            '0009-12-31'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('0099-12-31')),
            '0099-12-31'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('0999-12-31')),
            '0999-12-31'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('1999-12-31')),
            '1999-12-31'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('2000-01-01')),
            '2000-01-01'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('2000-01-02')),
            '2000-01-02'
        );

        assert.strictEqual(
            denormalizeDate(normalizeDate('19999-12-31')),
            '19999-12-31'
        );
    });
});