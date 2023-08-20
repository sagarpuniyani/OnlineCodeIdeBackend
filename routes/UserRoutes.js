import express from 'express';
import {usercontroller} from '../controller/user-controller.js';

export  const UserRoutes = express.Router();

// CRUD Methods 

// Writing operations(Insertion and Updation )
UserRoutes.post('/login' , usercontroller.login);
UserRoutes.post('/register' , usercontroller.register);


// Read Profile 
UserRoutes.get('/profile/:username'  , usercontroller.profile)

// Update commands
UserRoutes.put('/change-password' , usercontroller.changepassword);

// Delete operation 
UserRoutes.delete('/delete-account');

 
