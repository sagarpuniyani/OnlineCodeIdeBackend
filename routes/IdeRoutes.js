import express from 'express';

export const IdeRoutes = express.Router();

// write opeartions 
IdeRoutes.post('/compile');
IdeRoutes.post('/execute');

// Read operations 
IdeRoutes.get('/question');
IdeRoutes.get('/questions');