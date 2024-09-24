import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from './components/Footer'
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </AnimatePresence>
  );
};

export default App;
