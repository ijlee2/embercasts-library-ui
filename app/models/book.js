import DS from 'ember-data';
const { Model, attr, belongsTo, hasMany } = DS;

export default class BookModel extends Model {
    @attr('string') title;
    @attr('string') isbn;
    @attr() publicationDate;

    @belongsTo('author') author;
    @hasMany('review') reviews;
}