import { IoLogoWhatsapp } from 'react-icons/io'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function SocialNetworks(){
    return(
        <>
            <li className='menu-links-list-item'><a href='#' className='link link-icon'><MdEmail/></a></li>
            <li className='menu-links-list-item'><a href='https://www.linkedin.com/in/samuelcorreiaaraujo/' target='_blank' rel='noreferrer' className='link link-icon'><FaGithub/></a></li>
            <li className='menu-links-list-item'><a href='https://www.linkedin.com/in/samuelcorreiaaraujo/' target='_blank' rel='noreferrer' className='link link-icon'><FaLinkedin/></a></li>
            <li className='menu-links-list-item'><a href='#' className='link link-icon'><IoLogoWhatsapp/></a></li>
        </>
    )
}

export default SocialNetworks;