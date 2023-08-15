import Board from "./components/Board/Board";
import { useSelector } from "react-redux";
import NextMove from "./components/NextMove/NextMove";
import Modal from "./components/Modal/Modal";
import Points from "./components/Points/Points";
function App() {
  const values = useSelector((state) => state.values);
  const size = useSelector((state) => state.size);
  return (
    <div className="App">
        <Points />
        <Board values={values} size={size} />
        <NextMove />
        <Modal />
    </div>
  );
}

export default App;
