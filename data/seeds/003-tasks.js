
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    {description:'description of task 1', notes:'some notes task 1', completed: true},
    {description:'description of task 2', notes:'some notes task 2', completed: false},
    {description:'description of task 3', notes:'some notes task 3', completed: false},
  ]);
}
