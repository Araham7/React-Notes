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
