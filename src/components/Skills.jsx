import '../assets/styles/skills.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact, FaFigma } from 'react-icons/fa'
import { TbApi } from 'react-icons/tb'

function Skills( {skillsToBeUsed} ){
    const skills = {
        HTML5: <li skill="HTML5" className='skill-item'><FaHtml5/></li>,
        CSS3: <li skill="CSS3" className='skill-item'><FaCss3Alt/></li>,
        JAVASCRIPT: <li skill="JAVASCRIPT" className='skill-item'><FaJsSquare/></li>,
        SASS: <li skill="SASS" className='skill-item'><FaSass/></li>,
        REACT: <li skill="REACT" className='skill-item'><FaReact/></li>,
        FIGMA: <li skill="FIGMA" className='skill-item'><FaFigma/></li>,
        API: <li skill="API" className='skill-item'><TbApi/></li>,
    }

    return(
        <>
            {skillsToBeUsed.map(skill => skills.hasOwnProperty(skill) ? skills[skill] : '')}
        </>
    )
}

export default Skills;