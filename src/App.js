import { Route, Switch, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Skills from "./components/Pages/Skills/Skills";
import Projects from "./components/Pages/Projects/Projects";
import Contact from "./components/Pages/Contact/Contact";
import { GlobalStyles } from "./globalStyles";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <Navbar toggle={toggle} />
      <Menu isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home isOpen={isOpen} />
          </Route>
          <Route path="/about" exact>
            <About isOpen={isOpen} />
          </Route>
          <Route path="/skills" exact>
            <Skills isOpen={isOpen} />
          </Route>
          <Route path="/projects" exact>
            <Projects isOpen={isOpen} />
          </Route>
          <Route path="/contact" exact>
            <Contact isOpen={isOpen} />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
