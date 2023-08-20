import { UserModel } from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";

// importing the schema of the User Model 


export const usercontroller = {
// 1. login by the user 
    async login( request , response ){
        const userInfo  = request.body;
        

        try {
            console.log("Enter in login ")
        const doc = await  UserModel.findOne({"email" : userInfo.email}).exec();
        
        // printing the doc data 
        console.log("Doc is " , doc);

        if(doc && doc._id){

            // database password 
            const dbpassword = doc.password;
            console.log("dbpassword is " ,dbpassword )

            // plainpassword 
            const plainpassword = userInfo.password;
            console.log("plainpassword is " ,plainpassword )
            if(hashing.matchpassword(plainpassword , dbpassword)){
                response.json({message : "welcome "+ doc.name})
            }
            else {
                response.json({message : "Invalid User id or password "})
            }
        }
        else {
            response.json({message : "Invalid User id or password "})
        }
    }
    catch(err){
        throw err;
    }
    },

    // 2. register operations 
    async register( request , response){
        const userInfo = request.body;
        
        userInfo.password = hashing.passwordHashing(userInfo.password);
        try {
        const doc = await UserModel.create(userInfo);

        // checking the truthy of the doc and the doc's id 
        if(doc && doc._id){
            response.json({message : 'registeration Complete '});
        }
        else {
            response.json({message : 'Registration Failed '});
        }
    }
    catch(err){
        console.log("Registration Error is " , err);
        response.json({message : 'Registration Failed '});
    }
        
    },

    // read profile by user 
    profile( request , response ){
        const userName = request.params.username;
        response.json({message:userName+' profile'})
        
    },

    // Change password by user 
    changepassword( request , response ){
        response.json({message : 'changepassword'})

    }

}