
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project 1', completed: false},
        {name: 'project 2', description: 'description of project 2', completed: true},
        {name: 'project 3', description:null, completed: false}
      ]);
    }
