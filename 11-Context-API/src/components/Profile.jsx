import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {

    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>
    console.log(user);
    

    return(
        <div>Welcome <b>{user.username}</b> </div>
    )
}

export default Profile;