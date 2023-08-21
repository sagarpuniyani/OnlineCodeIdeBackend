import mongoose from "../Connection/Connection.js";

const { Schema } = mongoose;

const UserSchema = new Schema({
    "email": { type: Schema.Types.String, required: true, unique: true },
    "password": { type: Schema.Types.String, required: true, minLength: 8, maxLength: 100 },
    "name": { type: Schema.Types.String, required: true },
    "phone": { type: Schema.Types.String }
});

export const UserModel = mongoose.model('user', UserSchema);
