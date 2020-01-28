exports.seed = async knex => {
    await knex('resource').insert([
        {
            resource_name: "need a laptop",
            description: 'Laptop for completing projects'
        }
    ])
}