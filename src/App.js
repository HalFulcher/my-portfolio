import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <h1 style={{ textAlign: "center", paddingTop: "3em" }} id="Projects">
        projects
      </h1>
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
