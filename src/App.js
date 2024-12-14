import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;