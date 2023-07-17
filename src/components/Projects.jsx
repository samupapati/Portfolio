import '../assets/styles/projects.css'
import imgCitacao from '../assets/images/projects-prints/p-citacao.png'
import imgRickyAndMorty from '../assets/images/projects-prints/p-rickandmorty.png'
import imgEdificio from '../assets/images/projects-prints/p-edificio.png'
import imgDevset from '../assets/images/projects-prints/p-devset.png'
import imgShortly from '../assets/images/projects-prints/p-shortly.png'
import imgXConnection from '../assets/images/projects-prints/p-x-connection.png'
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
            img: imgXConnection,
            title: 'X-Connection',
            description: 'Design de uma rede social. Desenvolvi este projeto para treinar conceitos de UX/UI e estudar styled-components.',
            resources: ['REACT', 'STYLED-COMPONENTS'],
            links: ['https://samupapati.github.io/X-Connection-UI/', 'https://github.com/samupapati/X-Connection-UI', 'https://www.figma.com/file/H17ShAuU9gMm2XTrUTq1Cw/UI-Rede-Social?type=design&node-id=0%3A1&mode=design&t=LU9qbD2PTlLxL3lY-1'],
            status: 'Concluído'
        },
        {
            img: imgEdificio,
            title: 'Edifício 3D',
            description: 'Desenvolvi esta figura 3D usando apenas HTML e CSS. Utilizei as propriedades transform, rotate e skew para organizar os elementos na página.',
            resources: ['HTML5', 'CSS3'],
            links: ['https://samupapati.github.io/Edificio-3D-CSS/', 'https://github.com/samupapati/Edificio-3D-CSS'],
            status: 'Concluído'
        },
        {
            img: imgShortly,
            title: 'Shortly',
            description: 'Desafio do front-end mentor: encurtador de links. Consumi a API do bit.ly para encurtar os links e salvei os links encurtados no local storage do navegador, caso o usuário saia da página o link continuará salvo.',
            resources: ['HTML5', 'CSS3', 'JAVASCRIPT', 'SASS', 'API'],
            links: ['https://urlsrtly.netlify.app/', 'https://github.com/samupapati/Front-end-Mentor/tree/master/url_shortening_api_master'],
            status: 'Concluído'
        },
        {
            img: imgDevset,
            title: 'DEVSet',
            description: 'TCC do curso de Programação Web realizado no Instituto da Oportunidade Social. Desenvolvemos o site de uma construtora de apartamentos de alta tecnologia (fictício).',
            resources: ['HTML5', 'CSS3', 'JAVASCRIPT'],
            links: ['https://devset.vercel.app/', 'https://github.com/samupapati/Dev_Web_IOS_Projeto_Integrador'],
            status: 'Concluído'
            
        },
        {
            img: imgCitacao,
            title: 'Gerador de Citação',
            description: 'Desafio do freeCodeCamp: Gerador de citação aleatória. Consumi a API do site RapidAPI que retorna citações e autores. Ao clicar no botão do tweet, o usuário é redirecionado ao site do twitter para tweetar a citação.',
            resources: ['REACT', 'API'],
            links: ['https://samupapati.github.io/Gerador-de-Citacao/', 'https://github.com/samupapati/Gerador-de-Citacao'],
            status: 'Concluído'
        },
        {
            img: imgRickyAndMorty,
            title: 'Rick and Morty: Personagens',
            description: 'Projeto que consumi a API do Rick and Morty para listar os personagens na tela. Os usuários podem filtrar os personagens pelo nome, status e gênero.',
            resources: ['REACT', 'SASS', 'API'],
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