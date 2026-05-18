import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import { useState } from "react";

function App() {

  const [count, setcount] = useState(0)


  const decrementFunction = () => {
    setcount(count - 1)
  }
  const incrementFunction = () => {
    setcount(count + 1)
  }


  return (
    <>
      
      <p>Counter</p>
      <button onClick={decrementFunction}>  -  </button>
      <button onClick={incrementFunction}>  +  </button>
      <p>{count}</p>

    </>
  );
}

export default App;