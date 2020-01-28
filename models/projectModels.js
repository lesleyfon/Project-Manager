const db = require('./../data/dbConfig');


function fetchProjects(){
    return db('projects')
}



module.exports = {
    fetchProjects
}