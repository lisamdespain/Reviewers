/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('markets').del()
  await knex('markets').insert([
    {market_name: 'Amazon'},
    {market_name: 'Barnes and Noble'},
    {market_name: 'iTunes'}
  ]);
  
};