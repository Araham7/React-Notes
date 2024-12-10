import ArrayHandallingInUseState02 from "./ArrayHandallingInUseState02.js";
import Counter01 from "./Counter01.js";
import UpdateArrayElementWithCallback03 from "./UpdateArrayElementWithCallback03.js";


const App = () => {
  return (
    <>

    {/* (1). Simple Counter :--- */}
    <Counter01/>

    <hr/>

    {/* (2). Array updating using useState :--- */}
    <ArrayHandallingInUseState02/>

    <hr/>

    {/* (3). Array updating using callBackFunction :--- */}
    <UpdateArrayElementWithCallback03/>
    </>
  )
}

export default App;


