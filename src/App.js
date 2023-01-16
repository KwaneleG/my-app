import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(){
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;