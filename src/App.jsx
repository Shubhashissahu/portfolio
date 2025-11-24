import styles from './App.module.css';  // Fix typo in your current import ('ncounter.css')
import Navbar from './Components/Navbar/Navbar';
import {Hero} from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Skills } from './Components/Skills/Skills';
import {Project } from './Components/Project/Project';
import {Contact }from './Components/Contact/Contact';
import {Footer} from './Components/Footer/Footer';


function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;