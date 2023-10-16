import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

//components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>

        <Routes>
          <Route element={<About />} path="/about" />
        </Routes>

        <Routes>
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
