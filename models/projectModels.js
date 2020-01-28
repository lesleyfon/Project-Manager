const db = require('./../data/dbConfig');


function fetchProjects(){
    return db('user')
}



module.exports = {
    fetchProjects
}