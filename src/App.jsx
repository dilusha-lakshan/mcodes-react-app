function App() {

  const firstName = "Dilusha";
  const middleName = "Lakshan";
  const lastName = "Jayasooriya";
  const city = "Chilaw";
  const age = 22;
  const arr = ["Dilusha", "Chilaw", 22,];
  const lang = <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JS</li>
  </ul>

  const getFullName = (f, m, l) => {
    return `${f} ${m} ${l}`;
  }

  return (

    <>
    <h1 className="heading">React Rocks</h1>
    
    <p>Hello {firstName} {lastName}</p>
    <p>It's {10*10}% free</p>
    <p>You are {age>18 ? "an Adult" : "a Child"}</p> 

    <p>Full Name Function : {getFullName("Nick", "Smith", "Show")} </p>

    {lang}
    </>
  )
}

export default App


