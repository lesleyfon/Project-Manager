exports.up = async function(knex) {
    await knex.schema.createTable('user', tbl => {
        tbl.increments();
        tbl.string('full_name').notNullable();
        tbl.string('email').notNullable().unique();
        tbl.string('password').notNullable();
    })
    await knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name').notNullable();
        tbl.string('description').notNullable();
        tbl.boolean('completed');
        tbl.integer('user_id').unsigned().notNullable().references('id').inTable('user').onDelete('CASCADE').onUpdate('CASCADE')
    });
    await knex.schema.createTable('resource', tbl => {
        tbl.increments();
        tbl.string('resource_name').notNullable().unique();
        tbl.string('description').notNullable();
    });

    await knex.schema.createTable('task', tbl =>{
        tbl.increments();
        tbl.string('task_name').notNullable();
        tbl.string('description').notNullable();
        tbl.string('notes')
        tbl.boolean('completed');
        tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE')
    })

      await knex.schema.createTable('project_resource', tbl => {
        tbl.integer("project_id").unsigned().notNullable().references("id").inTable("projects").onDelete("CASCADE").onUpdate("CASCADE");
        tbl.integer("resource_id").unsigned().notNullable().references("id").inTable("resource").onDelete("CASCADE").onUpdate("CASCADE");
        tbl.primary(["project_id", " resource_id"]);

    });
  

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('project_resource')
    await knex.schema.dropTableIfExists('task')
    await knex.schema.dropTableIfExists('resource')
    await knex.schema.dropTableIfExists('projects')
    await knex.schema.dropTableIfExists('user')
};
