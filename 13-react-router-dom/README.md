# 1. Install the `react-router-dom` package :---
```bash
npm install react-router-dom
```

# 2. Set Up the Router :--
## Wrap your application with a BrowserRouter component, which enables routing in your React app.

### `main.jsx` =>
```jsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
```

# 3. Create a Dedicated `routes` directory :---
## create a separate `CustomRoutes.jsx` file in `routes` directory to organize all routes. This keeps the App component clean.

### `routes/CustomRoutes.jsx` =>
```jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/About';
import Contact from '../pages/Contact';

function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default CustomRoutes;
```

# 4. Import the `CustomRoutes` file into `App` (This will keep the `App` component clean):

## `App.jsx` =>
```jsx
import CustomRoutes from "./routes/CustomRoutes";

function App() {

  return (
    <>
      <CustomRoutes />
    </>
  )
}

export default App;
```

# 5. Handalling Wrong route 404 Page Not Found :---
## ## `useNavigate()`: It is a hook used for navigating between pages, allowing you to navigate both backward and forward to pages you have visited.

### `PageNotFound.jsx` =>
```jsx
import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Not Found!</h1>

      <button
      onClick={()=> navigate(-1)} /* Isko click karne se humlog previous page me chalejayenge.*/
      >
        {/* <NavLink> */}
        Go Back!
        {/* </NavLink> */}
      </button>
    </div>
  )
}

export default PageNotFound;
```