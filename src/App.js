import About from './components/About/About';
import './App.css';
import Contact from './components/Contact/Contact';
import Header from './components/Navbar/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skill from './components/Skills/Skill';
import Footer from './components/Footer/Footer'; 

function App() {
  return (
    <div className="m-0 p-0 h-screen w-screen box-border">
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
