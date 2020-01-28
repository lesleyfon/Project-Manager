const db = require('./../data/dbConfig');
const bcrypt = require('bcryptjs')

async function addUser(user){

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    await db("user").insert(user);
    return findUserByEmail(user.email)
}

function findUserByEmail(email){

    return db('user').where('email', email).first()
}
module.exports = {
    addUser
}