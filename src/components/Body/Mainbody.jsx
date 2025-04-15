import style from '../style/MainBody.module.css'
import img from '../../assets/fotoPerfilPortifolio.png'


export default function MainBody() {
    return (
        <section className={style.BodyMain}>
            <div className={style.MainBodyContent_left}>
                <h1 className={style.slideInUp}>Hi,  </h1>
                <h1 className={style.slideInUp}>I'm Gabriel Marques</h1>
                <h3 className={style.slideInUp}>Full-Stack Developer</h3>
                <p className={style.slideInUp}>I'm Gabriel Marques, a Brazilian developer who graduated with a full scholarship from FIAP University. I have experience in Front-End development using React.js and in building mobile applications with React Native. Currently, I'm focusing on the .NET ecosystem, deepening my knowledge in .NET and ASP.NET. I'm pursuing a Post-Tech specialization in .NET Systems Architecture at FIAP, aiming to expand my skills in scalable and modern solutions.</p>

                <div className={style.ContentButtonMain}>
                    <button onClick={()=>{window.open("https://drive.google.com/file/d/1Z4UQp5GmUEHtjdRc2rlsE7aJYaKyeuCl/view?usp=sharing","_blank")}}>Download CV</button>
                </div>

            </div>

            <div className={style.MainBodyContent_right}>
                <img className={style.ImgSummary} src={img} alt="Imagem de Perfil" />
            </div>
        </section>
    )
}