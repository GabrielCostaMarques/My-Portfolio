import styles from '../style/Header.module.css'
import { useState } from 'react'


export default function Header(){

    const [scrolled, setScrolled] = useState(false)
    // const themeChange=()=>{
    //     var toggle= document.getElementById("toggle");

    //     if (toggle.checked) {
    //         var bodyColor= document.getElementById('root');
    //         bodyColor.classList.add("darkMode")
    //     }
    // }
    // themeChange()


    const handleScroll = () => {
        if (window.scrollY > 130) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    window.addEventListener("scroll", handleScroll)

    return(
        <header>
                
                <div className={`${styles.headerContent} ${scrolled ? styles.scrollDown : ""}`}>
                <nav>
                    <a href="#overview">ABOUT ME</a>
                    <a href="#projetos">PROJECTS</a>

                    {/* <div className='' >
                        <input type="checkbox" name="toggleColor" id="toggle" />
                    </div> */}
                </nav>
            </div>
        </header>
    )
}