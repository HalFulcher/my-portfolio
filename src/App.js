import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./index.css";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
