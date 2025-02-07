import style from '../style/MainBody.module.css';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import imgAbout from '../../assets/FotoAboutMe.png'


export default function AboutMe() {
    return (
        <section id='overview' className={style.BodyMain}>
            
            <div className={style.MainBodyContent_right}>
                <img src={imgAbout} alt="Imagem de Perfil" />
            </div>
            <div className={style.MainBodyContent_left}>
                <h1 className={style.slideInUp}>About me</h1>
                <h3 className={style.slideInUp}>_________________</h3>
                    <p className={style.slideInUp}>I live in São Paulo, Brazil, with my parents, sisters, and a dog. I'm working at R11 Travel as a Junior Developer and have been there since September 2022.
                    I enjoy listening to music, especially trap and rap, as it helps me stay focused while studying or working. I also like going out with my friends and traveling to new places.</p>
                <div >
                    <a href="https://github.com/GabrielCostaMarques"><AiFillGithub className={style.icons} /></a>
                    <a href="https://www.instagram.com/bielcmqs/"><AiFillInstagram className={style.icons} /></a>
                    <a href="https://www.linkedin.com/in/gabriel-marques-6b4b22208/"><AiFillLinkedin className={style.icons} /></a>
                    
                </div>
            </div>


        </section>
    )
}
