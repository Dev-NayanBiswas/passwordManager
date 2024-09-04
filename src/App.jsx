import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className="w-10/12 mx-auto">
        <Form />
      </section>
    </>
  );
}

export default App;
