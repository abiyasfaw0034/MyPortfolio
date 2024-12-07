import About from "./ui/About";
import Contact from "./ui/Contact";
import Front from "./ui/Front";
import NavBar from "./ui/NavBar";
import Works from "./ui/Works";

function App() {
  return (
    <div className="text-center">
      <NavBar />
      <Front />
      <About id="about" />
      <Works id="work" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
