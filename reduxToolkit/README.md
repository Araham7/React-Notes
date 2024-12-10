# Redux/Toolkit :---

## 1. Istall required Packages :--
```bash
npm install react-redux
npm install @reduxjs/toolkit
 ```

## 2. Create a Store-folder namely `./src/Redux/Store.js` and create a store for `counter` :

### `store.js` =>
```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{},
})
```

## 3. Edit `main.jsx` , and `provide store to the whole application(App.jsx) => Ab hamare pure App-Component ke paas me store ka access aagaya hai` :---

### `main.jsx` =>
```jsx
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js' // import this

createRoot(document.getElementById('root')).render(
  <Provider store={store}> // Add this 
    <App />
  </Provider> // and this
)

```

## 4. Creating a `Slice` : `every features is a slice in redux.`

### Create a Slice in `./src/slices/counter/counterSlice.js` :---

#### `./src/slices/counter/counterSlice.js`=>
```js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    initialState: 0, // This will set the initialState = 0.
    name: 'counter', // यह `Redux DevTools` में `Slice` की पहचान के लिए उपयोग होता है।
    reducers: { // "reducers" : यह ऐसे फ़ंक्शन (function) हैं जो 'actions' को संभालते(handel) हैं और स्थिति (state) को बदलते हैं।
        increment: (state) => state + 1, /* यह स्थिति (state) में 1 जोड़ देगा। */
        decrement: (state) => state - 1, /* यह स्थिति (state) में से 1 घटा देगा। */
    },
})

export const { decrement , increment } = counterSlice.actions; /* Yanha par humlogon ne bataya hai ki `decrement` aur `increment` hamara `action` hai aur use export kardo. */
export default counterSlice.reducer; /* Yanha par humlogon ne counterSlice ke reducer ko export kiya hai */
```

## 5. Edit `./src/Redux/store.js` file :---

`./src/Redux/store.js`=>
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";/* Kunki ise ```export default counterSlice.reducer;``` , `store.js` se default export kiya gaya hai isiliye humlog yanha par ise kisi-bhi-naam(counterReducer) se import karsakten hai. */

export const store = configureStore({
    reducer:{
        counter: counterReducer, /* Yanha par humlogon ne ise ek reducer dediya hai. */
    },
})
```

## 6. `creating coustomHook` for accesing-and-modifying the store data :--- `(./src/Redux/hooks/counterHook.js)`

### `./src/Redux/hooks/counterHook.js` =>
```js
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/counter/counterSlice";

function useCounter() {
  // Access the count state using the counter slice name
  const count = useSelector((state) => state.counter);

  // Initialize dispatch function
  const dispatch = useDispatch();

  // Dispatch increment action
  const incrementCount = () => dispatch(increment());

  // Dispatch decrement action
  const decrementCount = () => dispatch(decrement());

  return { count, incrementCount, decrementCount };
}

export default useCounter;
```


## 7. Modifying Store-counter value :---

### `App.jsx` =>
```jsx
import "./App.css";
import Counter from "./Counter";
import useCounter from "./Redux/hooks/useCounter"; // Importing reduxToolkit-hook.

function App() {

  const {incrementCount, decrementCount} = useCounter(); // destructing `incrementCount` and `decrementCount` method from the `useCounter()` hook.
  
  return ( 
  <>
  {/* Increment Button */}
  <button
  onClick={()=> incrementCount()} // This will increase Counter by +1
  >
    Increment
  </button>

  {/* Counter */}
  <Counter/>

  {/* Decerement Button */}
  <button
  onClick={() => decrementCount()} // // This will decrement Counter by -1
  >
    Decerement
  </button>
  </> 
);
}

export default App;
```


## 8. Accessing Store-counter value :---

### `Counter.jsx` Component =>

```jsx
import React from 'react'
import useCounter from './Redux/hooks/useCounter';

function Counter() {

  const { count} = useCounter();

  return (
    <div>
        {/* Counter Heading */}
      <div>
        <h1>
            Counter : {count}
        </h1>
      </div>
    </div>
  )
}

export default Counter;
```