import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas, Works } from "./components";
import { Toaster } from "react-hot-toast";
import bg from "../src/assets/herobg.png"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}

export default App;
