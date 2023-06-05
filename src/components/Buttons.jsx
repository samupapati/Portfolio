import '../assets/styles/buttons.css'

function Buttons({links}){
    return(
        <>
            <li className="button"><a href={links[0]} target='_blank' rel='noreferrer' className="button-link">Ver projeto</a></li>
            <li className="button"><a href={links[1]} target='_blank' rel='noreferrer' className="button-link">Ver código</a></li>
        </>
    )
}

export default Buttons;