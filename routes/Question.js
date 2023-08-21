import express from "express";
import { QuestionController } from "../controller/Question-controller.js";

export const  questionsRoutes = express.Router();


// CRUD Methods 

// Read question 
questionsRoutes.get('/question'  , QuestionController.allQuestion)


// Writing operations(Insertion and Updation )
questionsRoutes.post('/addquestion' , QuestionController.addQuestion);

// put the question 
questionsRoutes.put('/updatequestion' , QuestionController.updateQuestion);

// Delete operation 
questionsRoutes.delete('/removequestion' ,QuestionController.removeQuestion );
