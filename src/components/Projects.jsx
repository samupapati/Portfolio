import '../assets/styles/projects.css'
import imgRickyAndMorty from '../assets/images/projects-prints/p-rickandmorty.png'
import imgAssassinsCreed from '../assets/images/projects-prints/p-assassins.png'
import imgDevset from '../assets/images/projects-prints/p-devset.png'
import imgShortly from '../assets/images/projects-prints/p-shortly.png'
import ProjectItem from './ProjectItem';
import { useState } from 'react';


function Projects(){
    const [activeProject, setActiveProject] = useState(null)
    function handleActiveProject(indexProject){
        if(indexProject === null){
            setActiveProject(null)
        }else{
            setActiveProject(indexProject)
        }
    }

    const projects = [
        {
            img: imgRickyAndMorty,
            title: 'Rick and Morty: Personagens',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis porttitor metus. Nam consectetur velit vestibulum risus maximus, eget egestas est consequat.',
            resources: ['REACT', 'SASS', 'API'],
            links: ['https://samupapati.github.io/Rick-and-Morty-Characters/build/index.html', 'https://github.com/samupapati/Rick-and-Morty-Characters'],
            status: 'Concluído'
        },
        {
            img: imgDevset,
            title: 'DEVSet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis porttitor metus. Nam consectetur velit vestibulum risus maximus, eget egestas est consequat.',
            resources: ['HTML5', 'CSS3', 'JAVASCRIPT'],
            links: ['https://devset.vercel.app/', 'https://github.com/samupapati/Dev_Web_IOS_Projeto_Integrador'],
            status: 'Concluído'
        
        },
        {
            img: imgShortly,
            title: 'Shortly',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis porttitor metus. Nam consectetur velit vestibulum risus maximus, eget egestas est consequat.',
            resources: ['HTML5', 'CSS3', 'JAVASCRIPT', 'SASS', 'API'],
            links: ['https://urlsrtly.netlify.app/', 'https://github.com/samupapati/Front-end-Mentor/tree/master/url_shortening_api_master'],
            status: 'Concluído'
        },
        {
            img: imgAssassinsCreed,
            title: 'Assassin´s Creed',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis porttitor metus. Nam consectetur velit vestibulum risus maximus, eget egestas est consequat.',
            resources: ['HTML5', 'CSS3'],
            links: ['https://samupapati.github.io/Rick-and-Morty-Characters/build/index.html', 'https://github.com/samupapati/Rick-and-Morty-Characters'],
            status: 'Concluído'
        },
    ]

    return(
        <section id="projects">
            <h3>Projetos</h3>

            {activeProject === null ? 
                <article className='projects-grid'>
                    {projects.map((project, index) => 
                        <article className='projects-grid-item' style={{'backgroundImage': `url(${project['img']})`}} onClick={() => handleActiveProject(index)}>
                            <div className='projects-grid-item-dark'>
                                <h4>{project['title']}</h4>
                            </div>
                        </article>
                    )}
                </article>
            :
                <ProjectItem data={projects[activeProject]} handleActiveProject={handleActiveProject}/>
            }


        </section>
    )
}

export default Projects;