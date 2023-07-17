import '../assets/styles/certifications.css'

function Certifications(){
    return(
        <section id="certifications">
            <h3 id='certifications-title'>Certificações</h3>
            <article id="certifications-boxes">
                <div className="certifications-box">
                    <h4>Algoritmos e estruturas de dados em JavaScript</h4>
                    <ul>
                        <li><h5>FreeCodeCamp</h5></li>
                        <li>10/2022</li>
                        <li>300 horas</li>
                    </ul>
                </div>
                <div className="certifications-box">
                    <h4>Programação Web</h4>
                    <ul>
                        <li><h5>Instituto da <br/> Oportunidade Social</h5></li>
                        <li>07/2022</li>
                        <li>300 horas</li>                    
                    </ul>
                </div>
                <div className="certifications-box">
                    <h4>Web Design Responsivo</h4>
                    <ul>
                        <li><h5>FreeCodeCamp</h5></li>
                        <li>05/2022</li>
                        <li>300 horas</li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default Certifications;