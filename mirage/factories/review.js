import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const randomInteger = (a, b) => {
    return Math.floor((b - a + 1) * Math.random()) + a;
};

export default Factory.extend({
    user() {
        return `${faker.name.firstName()} ${faker.name.lastName()}`;
    },

    body() {
        return faker.lorem.sentence();
    },

    createdAt() {
        return faker.date.recent(365);
    },

    afterCreate(review, server) {
        const allBookIds = server.db.books.mapBy('id');
        const index = randomInteger(0, allBookIds.length - 1);

        review.bookId = allBookIds[index];

        review.save();
    }  
});