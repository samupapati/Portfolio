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

    return (
        <header id="menu" className='container'>
            <div id='menu-items'>
                <input type="checkbox" id='menu-check'/>
                <nav id='links-social' className='menu-links'>
                    <ul className='menu-links-list list'>
                        <SocialNetworks/>
                    </ul>
                </nav>
                <nav id='links-page' className='menu-links'>
                    <ul className='menu-links-list list'>
                        <li className='menu-links-list-item'><a href='#' className='link link-text'>Home</a></li>
                        <li className='menu-links-list-item'><a href='#sobre' className='link link-text'>Sobre</a></li>
                        <li className='menu-links-list-item'><a href='#' className='link link-text'>Projetos</a></li>
                    </ul>    
                </nav>
                <Toggle/>
                <label htmlFor="menu-check" id='menu-btn-hamburguer'><AiOutlineMenu/></label>
            </div>
        </header>
    )
}

export default Menu;