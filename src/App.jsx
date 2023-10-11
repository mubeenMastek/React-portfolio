import Contact from "./componenets/contact/Contact";
import Intro from "./componenets/intro/Intro";
import Portfolio from "./componenets/portfolio/Portfolio";
import Testimonials from "./componenets/testimonials/Testimonials";
import TopBar from "./componenets/topbar/TopBar";
import Works from "./componenets/works/Works";
import './app.scss';
import { useState } from "react";
import Menu from "./componenets/menu/Menu";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen}  />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
