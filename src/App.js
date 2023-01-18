import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } exact />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;