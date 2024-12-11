# There is no need for an external installation of the `Context API` as it comes pre-installed with React.:---

# `Context` : Ye ek type ka global-variable hi hai.

## Process of making Context-API :---

1. create a Folder

- src
  - components
    - Login.js
    - Profile.jsx
  - context
    - UserContext.js
    - UserContextProvider.jsx
- App.jsx

<!-- -------------------------------------------------------------- -->

## `UserContext.js`
```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

## `UserContextProvider.jsx`
```jsx
import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children })=> {

    const [user , setUser] = useState(null);

    return(
        <UserContext.Provider value={{user , setUser}} >
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
```

## `App.jsx`
```jsx
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {

  return (
    <UserContextProvider>
      <h1>This is simple heading!</h1>

      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App;
```

## `Login.jsx`(Sending the data to the API-Context-object)

```jsx
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
```

## `Profile.jsx`(Accessing the from the API-Context-object)

```jsx
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {

    const {user} = useContext(UserContext);

    if(!user) return <div>Please Login</div>

    return(
        <div>Welcome {user.username}</div>
    )
}

export default Profile;
```