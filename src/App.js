import Board from "./components/Board/Board";
import { useSelector } from "react-redux";

function App() {
  const values = useSelector((state) => state.values);
  const size = useSelector((state) => state.size);
  return (
    <div className="App">
        <Board values={values} size={size} />
    </div>
  );
}

export default App;
