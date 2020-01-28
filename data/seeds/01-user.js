exports.seed = async knex => {
    await knex('user').insert([
        {
            full_name: 'lesley',
            email: 'lesley@gmail.com',
            password: '123456'
        }
    ])
}