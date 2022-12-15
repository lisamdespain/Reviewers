/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'ldespain', first_name: 'Lisa', last_name: 'DeSpain',
  email: 'lisamdespain@gmail.com', phone: '+19182326155', phone_notifications: 0, avatar: '', website: ''},
  {username: 'idespain', first_name: 'Ian', last_name: 'DeSpain',
  email: 'idespain@cox.net', phone: '+19182326138', phone_notifications: 0, avatar: '', website: ''},,
  ]);
  await knex('user_types').del()
  await knex('user_types').insert([
    {type_name: 'author'},
    {type_name: 'reviewer'},
    {type_name: 'both'},
  ]);
  
};

