import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function() {
    this.route('authors', function() {
        this.route('create');
        this.route('details', { path: '/:id' }, function() {
            this.route('new-book');
        });
        this.route('edit', { path: '/:id/edit' });
    });

    this.route('books', function() {
        this.route('create');
        this.route('details', { path: '/:id' }, function() {
            this.route('new-review');
        });
        this.route('edit', { path: '/:id/edit' });
    });
});