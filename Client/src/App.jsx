import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { About } from "./pages/About.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
        
      </>
  );
}

export default App;
