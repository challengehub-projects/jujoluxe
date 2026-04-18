import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        } />
        <Route path="/contact" element={<>
          <Navbar />
          <Contact />
          <Footer />
        </>} />
        <Route path="/about" element={<>
          <Navbar />
          <About />
          <Footer />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;