import '../assets/styles/menu.css'
import { AiOutlineMenu } from 'react-icons/ai'
import SocialNetworks from './SocialNetworks';
import Toggle from './Toggle';

function Menu(){
    window.addEventListener('resize', resetCheckboxOnResize)
    function resetCheckboxOnResize(){
        let checkbox = document.getElementById('menu-check')
        if(checkbox.checked){
            checkbox.checked = false
        }
    }
    function redirectLinkAndCloseMenu(redirect){
        let checkbox = document.getElementById('menu-check')
        if(checkbox.checked){
            checkbox.checked = false;
        }
        window.scrollTo(document.getElementById(document.getElementById(redirect)))
    }

    return (
        <header id="menu" className='container'>
            <div id='menu-items'>
                <input type="checkbox" id='menu-check'/>
                <ul id='links-social' className='menu-links'>
                    <SocialNetworks/>
                </ul>
                <ul id='links-page' className='menu-links'>
                    <li className='menu-links-list-item'><a href='#home' className='link link-text' onClick={() => redirectLinkAndCloseMenu('home')}>Home</a></li>
                    <li className='menu-links-list-item'><a href='#certifications' className='link link-text' onClick={() => redirectLinkAndCloseMenu('certifications')}>Certificações</a></li>
                    <li className='menu-links-list-item'><a href='#projects' className='link link-text' onClick={() => redirectLinkAndCloseMenu('projects')}>Projetos</a></li>
                </ul>
                <Toggle/>
                <label htmlFor="menu-check" id='menu-btn-hamburguer'><AiOutlineMenu/></label>
            </div>
        </header>
    )
}

export default Menu;