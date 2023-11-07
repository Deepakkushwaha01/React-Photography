import Footer from "./Components/Footer";
import About from "./Components/About";
import Frequntly from "./Components/Frequntly";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Quality from "./Components/Quality";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Up from "./Components/Helper/Up";
import Contact from "./Components/Contact";




function Apptwo() {

  return (
    <div >
      <Navbar />
      <Up/>
      <Home /> 
      <Services />
      <About />
      <Quality />
      <Team />
      <Contact/>
      <Frequntly />
      <Footer /> 

    </div>
  );
}

export default Apptwo;
