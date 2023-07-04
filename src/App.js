import Board from "./components/Board/Board";

function App() {
  return (
    <div className="App">
        <Board values={["x","x",null,"x","o","o",null,"o","x"]}/>
    </div>
  );
}

export default App;
