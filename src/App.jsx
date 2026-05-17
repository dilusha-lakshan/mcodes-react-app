import BodyContent from "./Components/BodyContent/BodyContent"
import FooterContent from "./Components/FooterContent/FooterContent"
import HeaderContent from "./Components/HeaderContent/HeaderContent"

function App() {


  return (

    <>
      <div id="wrapper">
        <HeaderContent/>
        <BodyContent>
          <button>Click Me</button>
          <p>Hello there !</p>
        </BodyContent>

        <BodyContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis accusantium, rem vero aut optio doloribus amet facere dicta cum enim tenetur quasi recusandae consectetur excepturi ipsam, porro ex! Suscipit, quis?
        </BodyContent>
        
        <FooterContent/>

      </div>
    
    </>
  )
}

export default App


