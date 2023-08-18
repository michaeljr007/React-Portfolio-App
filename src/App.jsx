import Header from "./Header";
import Hero from "./Hero";
import Featured from "./Featured";
import About from "./About";
import Onfocus from "./Onfocus";
import Services from "./Serivices";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="Head">
        <Header />
        <Hero />
      </div>
      <div id="main">
        <Featured />
        <About />
        <Onfocus />
        <Services />
        <Pricing />
        <Faq />
        <Portfolio />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
