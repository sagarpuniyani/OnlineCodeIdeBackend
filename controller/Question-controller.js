import { QuestionModel } from "../db/models/question-schema.js";

export const QuestionController = {
    async addQuestion( req , res ){
        const quesInfo = req.body;

        try{
        const doc = await  QuestionModel.create(quesInfo);

        console.log("question Json is : " , doc)
        res.json({message : "Added question "})
        }
        catch(err){
            console.log("Add question Error : " ,err);
        }
    },
    updateQuestion(req , res ){
        res.json({message : "Update question "})
    },
    removeQuestion(req , res ){
        res.json({message : "Remove question "})
    },
    allQuestion( req , res  ){
        res.json({message : "All question "})
    }
}