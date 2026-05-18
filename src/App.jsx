import BodyContent from "./Components/BodyContent/BodyContent";
import FooterContent from "./Components/FooterContent/FooterContent";
import HeaderContent from "./Components/HeaderContent/HeaderContent";

function App() {

  function hello1() {
    console.log("hello 1");
  }

  const hello2 = () => {
    console.log("hello 2");
  };

  function hello3(name) {
    console.log("hello 3 " + name);
  }

  return (
    <>
      <div id="wrapper">

        <HeaderContent />

        <BodyContent>
          <button>Click Me</button>
          <p>Hello there!</p>
        </BodyContent>

        <BodyContent>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reiciendis accusantium, rem vero aut optio doloribus amet
            facere dicta cum enim tenetur quasi recusandae consectetur
            excepturi ipsam, porro ex! Suscipit, quis?
          </p>

          <button onClick={hello1}>
            Click01
          </button>

          <button onClick={hello2}>
            Click02
          </button>

          <button onClick={() => hello3("MCodes")}>
            Click03
          </button>

        </BodyContent>

        <FooterContent />

      </div>
    </>
  );
}

export default App;