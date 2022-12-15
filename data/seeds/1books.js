/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genres').del()
  await knex('genres').insert([
    {genre_name: 'fiction', genre_description: 'Made up stories'},
    {genre_name: 'nonfiction', genre_description: 'True stories'},
    {genre_name: 'science fiction', genre_description: 'Wild made up stories'},
  ]);
  await knex('books').del()
  await knex('books').insert([
    {book_title: 'Dr Seuss', isbn: '12345678910X', amazon_id: 'B123', cover_link: '3456', book_description: 'True stories about Dr S.', number_of_pages: 32, file_upload_link: '132246', why_review: 'You will love it!'},
    {book_title: 'Manchinema for Dummies', isbn: '456789101112', amazon_id: 'B456', cover_link: '1234', book_description: 'A quick overview of the worst people in the Democratic Party', number_of_pages: 320, file_upload_link: '12334', why_review: 'You need to know why they are so awful. We will expose them!'},
  ]);
  
};

