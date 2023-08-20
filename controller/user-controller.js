export const usercontroller = {

    login( request , response ){
        response.json({message : 'login'})
    },
    register( request , response){
        response.json({message : 'register'})
        
    },
    profile( request , response ){
        const userName = request.params.username;
        response.json({message:userName+' profile'})
        
    },
    changepassword( request , response ){
        response.json({message : 'changepassword'})

    }

}