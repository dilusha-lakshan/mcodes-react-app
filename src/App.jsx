function App() {

  let items = [
    "item1", "item2", "item3", "item4", "item5"
  ]

  return (
    <>

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
      
    </>
  );
}

export default App;