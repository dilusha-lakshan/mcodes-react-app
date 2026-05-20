import './App.css';
import { FaHome } from "react-icons/fa";


function App() {

  let items = [
    "item1", "item2", "item3", "item4", "item5"
  ]

  return (
    <>

      <h2>MCodes Frontend</h2>
      <h2 className="one">MCodes Frontend</h2>
      <h2 className="two">MCodes Frontend</h2>


      <ul>
        {items.map((item) => {
          return(
            <li key={item}>step 01  {item}</li>
          )
        })}

        {items.map((item) => (
            <li key={item}>step 02  {item}</li>
          ))}
        
      </ul>

      <h1 className="bg-blue-500 break-all text-green-400 uppercase">Test Tailwind CSS</h1>

      <h1>Importing REACT ICONS</h1>
      <h2>Ex:<FaHome />HOME</h2>
      
    </>
  );
}

export default App;