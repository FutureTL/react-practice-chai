import React , {useContext} from "react";
import UserContext from "../Context/UserContext";

function Profile(){

    const {user} = useContext(UserContext)
    
    if(!user) return <div> please login</div>

    return <div> Welcome back {user.username}. Dont tell anyone your password is : {user.password} </div>
}

export default Profile;