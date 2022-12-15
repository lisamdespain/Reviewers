/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('author_books').del()
  await knex('author_books').insert([
    {user_id: 1, book_id: 1},
    {user_id: 1, book_id: 2},
  ]);
  await knex('reviewer_books').del()
  await knex('reviewer_books').insert([
    {user_id: 1, book_id: 2},
    {user_id: 1, book_id: 1},
    {user_id: 2, book_id: 2},
  ]);
  await knex('user_genre').del()
  await knex('user_genre').insert([
    {user_id: 1, genre_id: 1},
    {user_id: 1, genre_id: 2},
    {user_id: 2, genre_id: 3},
  ]);
  await knex('book_genres').del()
  await knex('book_genres').insert([
    {book_id: 1, genre_id: 2},
    {book_id: 2, genre_id: 1},
    {book_id: 2, genre_id: 3},
  ]);
  await knex('book_market_links').del()
  await knex('book_market_links').insert([
    {market_id: 1, book_id: 1, link_url: 'abc'},
    {market_id: 2, book_id: 1, link_url: 'def'},
    {market_id: 3, book_id: 1, link_url: 'ghi'}
  ]);
  await knex('reward_user').del()
  await knex('reward_user').insert([
    {reward_id: 1, user_id: 1},
    {reward_id: 2, user_id: 1},
    {reward_id: 3, user_id: 2}
  ]);
  await knex('user_types_connection').del()
  await knex('user_types_connection').insert([
    {user_id: 1, type_id: 1},
    {user_id: 2, type_id: 3},
  ]);
  await knex('requests').del()
  await knex('requests').insert([
    {who_requested: 1, who_received_request: 2, book_id: 2, request_text: 'Would like to review your book', status_id:1},
    {who_requested: 2, who_received_request: 1, book_id: 1, request_text: 'Would you review my book?', status_id:4},
  ]);
  

};