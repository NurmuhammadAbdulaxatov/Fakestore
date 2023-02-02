import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import "./App.css";
import Details from "./Components/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Showcase />} />
        <Route path="/:detailsId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
