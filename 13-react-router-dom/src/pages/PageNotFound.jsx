import React from 'react'
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Page Not Found!</h1>

      <button
      onClick={()=> navigate(-1)}
      >
        {/* <NavLink> */}
        Go Back!
        {/* </NavLink> */}
      </button>
    </div>
  )
}

export default PageNotFound;
