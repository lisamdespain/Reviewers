/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('rewards').del()
  await knex('rewards').insert([
    {reward_name: 'Top reviewer'},
    {reward_name: 'Quick response'},
    {reward_name: 'Highly rated'}
  ]);
 
};