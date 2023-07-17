import '../assets/styles/home.css'
import Skills from './Skills';
import avatar from '../assets/images/avatar.png'

function Home(){
    return(
        <section id="home" className="container">
            <div id="home-content">
                <article id="home-texts">
                    <p id='saudacoes'>&#128075; Olá! eu sou</p>
                    <h1 id="home-titles-name-career" className="home-titles-title">Samuel Araujo<br/>Desenvolvedor Front<span className='detail'>&lsaquo;&frasl;</span>end<span className='detail'>&rsaquo;</span></h1>
                    <p id='home-paragraph'>Estudo front-end há cerca de 1 ano, ao longo desse tempo desenvolvi diversos projetos pessoais e desafios em plataformas de programação, como o Front-end mentor e freeCodeCamp. Atualmente, estou me aprofundando em React e começarei minha formação em Tecnologia da Informação.</p>
                    <ul className="list"><Skills skillsToBeUsed={['HTML5', 'CSS3', 'JAVASCRIPT', 'SASS', 'REACT', 'FIGMA']}/></ul>
                </article>
                <div id="avatar-chao">
                    <div id='avatar-chao-chao'></div>
                    <div id='avatar-chao-esquerdo'></div>
                    <div id='avatar-chao-direito'></div>
                </div>
                <img id='avatar' src={avatar} alt='avatar'/>
            </div>
        </section>
    )
}

export default Home;