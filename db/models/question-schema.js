import mongoose from "../Connection/Connection.js";
const { Schema } = mongoose;

const QuestionSchema = new Schema({
    "name": { type: Schema.Types.String, required: true, unique: true },
    "desc": { type: Schema.Types.String, required: true },
    "skeleton": { type: Schema.Types.String, required: true },
    "testcases": { type: Schema.Types.String , required: true  }
});

export const QuestionModel = mongoose.model('question', QuestionSchema);