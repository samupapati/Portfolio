import '../assets/styles/toggle.css'
import { useState } from 'react';

function Toggle(){
    const [theme, setTheme] = useState(true)
    function handleTheme(elementID){
        if(theme === true){
            document.documentElement.style.setProperty('--cor-1', '#ececec')
            document.documentElement.style.setProperty('--cor-2', '#3D3D3D')
            document.getElementById(elementID).style.transform = 'translateX(22px)'

            setTheme(false);

        } else{
            document.documentElement.style.setProperty('--cor-1', '#3D3D3D')
            document.documentElement.style.setProperty('--cor-2', '#ececec')

            document.getElementById(elementID).style.transform = 'translateX(0px)'
            setTheme(true);
        }

    }

    return(
        <div id='toggle-background' onClick={() => handleTheme('toggle-background-circle')}>
            <div id='toggle-background-circle'></div>
        </div>
    )
}

export default Toggle;