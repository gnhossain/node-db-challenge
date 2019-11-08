const db = require ('../data/db-config');

module.exports = {

    findProjects,
    findProjectsById,
    findRes,
    add
}

function findProjects(){
    return db ('projects')
    .then(project => {
        const convert = []

        Projects.foreEach(inProject => {
            inProject.completed === 1 ? inProject.completed = true : inProject.completed = false
            convert.push(inProject)
        })
        return convert
    });
}

function findProjectsById(){
    return db ('projects')
     .where({id})
     .first()
    .then(project => {

            Project.completed === 1 ? Project.completed = true : Project.completed = false
            return project
        })

}

function findRes(stepId){
    return db('projects as p')
    .join('resources as r', 'p.id', '=', 'r.project_id')
    .select('r.project_id', 'r.name', 'r.descriprion')
    .where({project_id: stepId})
}

function add(project){
    return db('projects').insert(project, 'id');
}