
exports.seed = async function(knex) {
  await knex('project_resource').del();
  await knex('task').del();
  await knex('resource').del();
  await knex('projects').del();
  await knex('user').del();
};