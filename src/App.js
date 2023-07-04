import Board from "./components/Board/Board";
import { useSelector } from "react-redux";

function App() {
  const values = useSelector((state) => state.values);
  return (
    <div className="App">
        <Board values={values} />
    </div>
  );
}

export default App;
