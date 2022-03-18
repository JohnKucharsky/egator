import Header from "./Pages/Header";
import Experience from "./Pages/Experience";
import Portfolio from "./Pages/Portfolio";
import Testimonials from "./Pages/Testimonials";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div id="#home">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
