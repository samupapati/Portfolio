function Buttons({links}){
    return(
        <>
            <li className="button"><a href={links[0]} target='_blank' rel='noreferrer' className="button-link">Ver projeto</a></li>
            <li className="button"><a href={links[1]} target='_blank' rel='noreferrer' className="button-link">Ver código</a></li>
            {
            links.length === 3 ? 
                <li className="button"><a href={links[2]} target='_blank' rel='noreferrer' className="button-link">Ver figma</a></li>
            :
                ""
            }
        </>
    )
}

export default Buttons;