import express from 'express';
import { UserRoutes } from './routes/userRoutes.js';
import {IdeRoutes} from './routes/IdeRoutes.js';

// to up the server 
const app = express();

// Fetching all the data  (and next to the middle ware )
app.use(express.json())

// telling the routes the application 
app.use('/' , UserRoutes);
app.use('/' , IdeRoutes);

// Last Middle Ware (404)
app.use((req , res , next ) =>{
    res.json({message : 'Invalid URL '})
})


const server = app.listen(1234 , (err)=>{
    if(err){
        console.log("server Crash " , err);
    }
    else{
        console.log("server up and running " , server.address().port)
    }
} )