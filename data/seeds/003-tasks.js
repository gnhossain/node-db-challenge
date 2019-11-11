
exports.seed = function(knex) {

  return knex('tasks').insert([
      {description:'project 1', notes:'notes', completed:true},
      {description:'project 2', notes:'notes', completed:true},
      {description:'project 3', notes:'notes', completed:true}
    ]);
};
