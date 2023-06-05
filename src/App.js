import './assets/styles/content.css';
import './assets/styles/media.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div id="content" className='container'>
      <Menu/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
