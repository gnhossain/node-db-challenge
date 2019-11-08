const db = require('../data/db-config.js');

module.exports = {
    findResources,
    findResourcesById,
    add
}
function findResources() {
    return db('resources');
}

function findResourcesById(){
    return db ('resources')
    .where({id})
    .first()
    .then(res => res);
}

function add(resource){
    return db('resources').insert(resource,'id');
}