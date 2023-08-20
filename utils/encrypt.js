import bcrypt from 'bcrypt';

export const  hashing = {
    SALT : 10 ,
    passwordHashing(plainpassword){
        return  bcrypt.hashSync(plainpassword , this.SALT);
    },
    matchpassword(plainpassword  , dbpassword){
        return bcrypt.compareSync(plainpassword , dbpassword );
    }
}
