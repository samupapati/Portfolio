import '../assets/styles/about.css'
import Foto from '../assets/images/person.webp'

import Skills from './Skills';

function About(){
    return(
        <section id="about">
            <img src={Foto} alt="" id="about-face"/>
            <p id='about-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis porttitor metus. Nam consectetur velit vestibulum risus maximus, eget egestas est consequat. Aenean non odio eget mauris tempor posuere at a nisl. Praesent tempus et augue eget semper. Donec dapibus sollicitudin feugiat. Quisque quis feugiat mi, id varius libero. Aliquam vitae luctus augue. Suspendisse sed suscipit sem. Phasellus ullamcorper eu ligula nec tristique. Integer fermentum in nibh id ultrices.</p>
            <article id="about-skills" className='about-article'>
                <p className='about-article-info'>Habilidades</p>
                <ul id="about-skills-list" className='about-article-description list'>
                    <Skills skillsToBeUsed={['HTML5', 'CSS3', 'JAVASCRIPT', 'SASS', 'REACT', 'FIGMA']}/>
                </ul>
            </article>
        </section>
    )
}

export default About;