import '../assets/styles/project_item.css'
import Buttons from './Buttons';
import Skills from './Skills'
import { CgArrowLongLeft } from 'react-icons/cg'

function ProjectItem({ data, handleActiveProject }) {
    console.log(handleActiveProject)
    return (

        <article className='project'>
            
            <div className='project-about'>
                <CgArrowLongLeft className='project-about-btn' onClick={() => handleActiveProject(null)}/>

                <div className='project-about-info'>
                    <h4 className="project-about-info-title">{data['title']}</h4>
                    <span className='project-about-info-status'>{data['status']}</span>
                </div>

                <p className="project-about-description">{data['description']}</p>
                
                <ul className='project-about-resources project-about-list list'>
                    <Skills skillsToBeUsed={data['resources']}/>
                </ul>
                <ul className='project-about-links project-about-list list'>
                    <Buttons links={data['links']}/>
                </ul>
            </div>

            <a className="project-link-img" href={data['links'][0]} target='_blank' rel='noreferrer'>
                <img className="project-img" src={data['img']} alt="" />
            </a>

        </article>
    )
}

export default ProjectItem;