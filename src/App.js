import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
function App() {
  return (
    <>
    <Particles
     className="particles-canvas"
     params = {{
      particles : {
        number : {
          value : 60,
          density : {
            enable :true,
            value_area: 900
          }
        }
      }
     }}/>
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
