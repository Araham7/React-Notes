import { useState } from "react";

function UpdateArrayElementWithCallback() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    setItems((prevItems) => [...prevItems, Math.floor(Math.random()*10)]); // Callback function se state ko update karna
  };

  return (
    <>
    <h1> Manage Array Element using Callback-function</h1>

    <button onClick={addItem}>Add Item</button>
    <div>{items.join(', ')}</div>

    </>
  )
}

export default UpdateArrayElementWithCallback;
