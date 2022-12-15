const db = require('../../data/db-config');

function getUsers() {
    return db('users');
}

function getUserById(id) {
    return db('users').where('users.user_id', id);
}

function getUserGenre(id){
    return db('users as u').rightJoin('user_genre as ug', 'u.user_id', 'ug.user_id').join('genres as g', 'ug.genre_id', 'g.genre_id').where('u.user_id', id).select('u.user_id', 'g.genre_name');
}

function getAuthorBooks(id){
    return db('users as u').rightJoin('author_books as a', 'u.user_id', 'a.user_id').join('books as b', 'a.book_id', 'b.book_id').where('u.user_id', id).select('u.user_id', 'b.book_title');
}

function getReviewerBooks(id){
    return db('users as u').rightJoin('reviewer_books as r', 'u.user_id', 'r.user_id').join('books as b', 'r.book_id', 'b.book_id').where('u.user_id', id);
}

module.exports = {
    getUsers, 
    getUserById,
    getUserGenre,
    getAuthorBooks,
    getReviewerBooks
}