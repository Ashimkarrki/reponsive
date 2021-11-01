import "./App.css";
import { React, useState } from "react";
import Nav from "./Nav";
import Sub_js from "./Sub_nav";
import About from "./About";
import Footer from "./Footer";
function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="App">
      <Nav setisOpen={setisOpen} isOpen={isOpen} />
      <Sub_js />
      <About />
      <Footer />
    </div>
  );
}

export default App;
