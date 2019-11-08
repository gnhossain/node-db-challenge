
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.text('description', 512);
        tbl.boolean('completed').notNullable();
    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.text('description', 512);

        tbl
            .integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');

            tbl
            .integer('task_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tasks')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT');

            tbl.unique(['project_id', 'task_id'])
    })

    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('description', 512).notNullable();
        tbl.text('notes', 512);
        tbl.boolean('completed').notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
};
