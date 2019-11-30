import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default class ReviewModel extends Model {
    @attr('string') user;
    @attr('string') body;
    @attr() createdAt;

    @belongsTo('book') book;
}