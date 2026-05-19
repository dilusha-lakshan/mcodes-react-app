import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";
import { useEffect, useState } from "react";
import LoggedIn from "./Components/LoggedIn";
import LoggedOut from "./Components/LoggedOut";

function App() {

  const loggedin = false;

  return (
    <>

      {loggedin && <LoggedIn/>}
      {!loggedin && <LoggedOut/>}
      
      
    </>
  );
}

export default App;