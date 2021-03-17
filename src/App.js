import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <h1 style={{ textAlign: "center", paddingTop: "4em" }} id="Projects">
        projects
      </h1>
      <Projects />

      <Contact />
      <Contacts />
    </div>
  );
}

export default App;
