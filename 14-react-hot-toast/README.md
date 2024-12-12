# react-hot-toast

## 1. Inststall `react-hot-toast`:---
```bash
npm install react-hot-toast
```
## 2. Use `react-hot-tost` :---
```jsx
import './App.css';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');


function App() {

  return (
    <div className='container'>

    {/* Simple Heading */}
      <h1>
      React-hot-tost
      </h1>

    {/* react-hot-toast */}
      <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>

    </div>
  )
}

export default App;
```