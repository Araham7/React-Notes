import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }

    return(
        <div>

            {/* Login Heading */}
            <h2>Login</h2>

            {/* username(Input-Field) */}
            <input type="text"
            value={username} // Iska matlab hai ki iske value ko "username" se controll kiya jayega.
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="username" />

            {/* password(Input-Field) */}
            <input type="text"
            value={password} // Iska matlab hai ki iske value ko "password" se controll kiya jayega.
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="password" />

            {/* submit-button */}
            <button onClick={handleSubmit} >Submit!</button>
        </div>
    )
}

export default Login;