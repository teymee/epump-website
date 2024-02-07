import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

//components
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ATG from "./pages/Products/ATG";
import Pump from "./pages/Products/Pump";
import EpumpGo from "./pages/Products/EpumpGo";
import FAQ from "./pages/FAQ";

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

        <Routes>
          <Route element={<EpumpGo />} path="/epumpGo" />
        </Routes>

        <Routes>
          <Route element={<FAQ />} path="/faq" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
