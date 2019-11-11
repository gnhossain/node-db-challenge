const express = require('express');

const TaskRouter = require('./tasks/tasks-router');
const ResourceRouter = require('./resources/resources-router');
const ProjectRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());
server.use('/api/tasks', TaskRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);


module.exports = server;