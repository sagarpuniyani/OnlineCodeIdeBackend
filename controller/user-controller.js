export const usercontroller = {

    login( request , response ){
        const userInfo  = request.body;
        
        if(userInfo.username == userInfo.password){
            console.log("username = " , userInfo.username);
            response.json({message : 'welcome ' + userInfo.username })
        }
        else{
            response.json({message : 'Not valid '});
        }



        console.log("reguest body is " , body);
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