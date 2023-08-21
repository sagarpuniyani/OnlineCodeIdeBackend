const URL = "mongodb+srv://admin:admin1234@mycluster.kpluecb.mongodb.net/userdb?retryWrites=true&w=majority"
import mongoose from 'mongoose';

// connection with the mongo 
const promise = mongoose.connect(URL);

promise.then(data => {
    console.log("Db is Connected ... ");
}).catch(err => {
    console.log("Error in connection is " , err);
})

export  default mongoose;
