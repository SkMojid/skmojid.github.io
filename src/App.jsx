import Home from "./pages/Home";
import About from "./components/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <>
        <Header></Header>
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </>
    </AnimatePresence>
  );
}

export default App;
