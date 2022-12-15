/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
  await knex('status').del()
  await knex('status').insert([
    {status_name: 'Request pending'},
    {status_name: 'Request approved'},
    {status_name: 'Request declined'},
    {status_name: 'Reviewer is reading'},
    {status_name: 'Reviewer is preparing reviews'},
    {status_name: 'Reviews complete'},
  ]);
  
};