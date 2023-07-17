import './assets/styles/content.css';
import Certifications from './components/Certifications';
import Home from './components/Home';
import Menu from './components/Menu';
import Projects from './components/Projects';


function App() {
  return (
    <div id="content" className='container'>
      <Menu/>
      <Home/>
      <Certifications/>
      <Projects/>
    </div>
  );
}

export default App;
