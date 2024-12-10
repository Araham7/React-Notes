import React, { useState, useEffect } from "react";

function ArrayHandlingInUseState() {
  const [items, setItems] = useState([5, "A"]); // Initialize with initial items

//   setItems((prevItems) => [...prevItems, 2 , "b"]); ===> YE kaam nahi karega agar tumhe array me koi bhi changes karna hai to tumhe "useEffect()"-hook ke andar me change karga hoga.

  useEffect(() => {
    // Update items when the component renders
    setItems((prevItems) => [...prevItems, 1, "a"]);

    setItems((prevItems) => [...prevItems, 2 , "b"]);
    // setItems(...items , 85 , 862 , 54236 , 5820);
  }, []); // Empty dependency array ensures it runs only once


  return (
    <div>
      <h1>Manage Array with useState : </h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayHandlingInUseState;
