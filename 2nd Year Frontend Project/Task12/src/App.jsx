import Greeting from "./Greeting";

function HelloWorld() {
  return <h1>Hello World!</h1>;
}

function App() {
  const name = "Yogesh";

  return (
    <div>
      <HelloWorld />
      <h2>Welcome {name}!</h2>
      <Greeting />
      <p>10 + 20 = {10 + 20}</p>
    </div>
  );
}

export default App;