exports.seed = async knex => {
    await knex('projects').insert([
        {
            project_name: 'Build Something',
            description: 'Try to build everyday',
            completed: false,
            user_id: 1,
        }
    ])
}