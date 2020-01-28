exports.seed = async knex => {
    await knex('task').insert([
        {
            task_name: 'Completed it by',
            description: 'Date to completed it ',
            notes: 'Some random notes',
            completed: false ,
            project_id: 1,
        }
    ])
}