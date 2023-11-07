
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Fashion from "./Components/Routes/Fashion";
import Product from "./Components/Routes/Product";
import Jewell from "./Components/Routes/Jewell";
import Arch from "./Components/Routes/Arch";
import Apptwo from "./Apptwo";
import MainGallery from "./Components/Routes/MainGallery";
import LargeView from "./Components/Routes/View/LargeView";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    let time;
    const handleVisibilityChange = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';

      if (document.hidden) {
        link.href = '/faviGif.gif'; // Replace with the path to your inactive favicon
      } else {
        link.href = '/hap.png'; // Replace with the path to your active favicon

      clearTimeout(time);
      time=setTimeout(()=>{
link.href='/images/favicon.png';
      },1000) 


      }

      document.getElementsByTagName('head')[0].appendChild(link);
    };

    // Add event listener for visibility change
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(time)
    };
  }, []);

  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Apptwo/>}/>
      <Route path="/gallery" element={ <MainGallery/> } />
   {/*   <Route path="/view" element={<LargeView/>}/> */}
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
