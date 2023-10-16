import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

//components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ATG from "./pages/Products/ATG";
import Pump from "./pages/Products/Pump";

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

        <Routes>
          <Route element={<ATG />} path="/ATG" />
        </Routes>

        <Routes>
          <Route element={<Pump />} path="/Pump" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
