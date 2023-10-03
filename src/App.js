import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayPage from "./components/PlayPage/PlayPage";
import StartPage from "./components/StartPage/StartPage";


const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/play" element={<PlayPage />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
