import style from '../style/MainBody.module.css'
import img from '../../assets/fotoPerfilPortifolio.png'


export default function MainBody() {
    return (
        <section className={style.BodyMain}>
            <div className={style.MainBodyContent_left}>
                <h1 className={style.slideInUp}>Hi,  </h1>

                <h1 className={style.slideInUp}>I'm Gabriel Marques</h1>
                <h3 className={style.slideInUp}>Full-Stack Developer</h3>
                <p className={style.slideInUp}>A developer from Brazil who graduated from FIAP University with a full scholarship. Over the past year, I've been dedicated to learning English to enhance my communication skills and broaden my professional opportunities. <br></br>Currently, I'm delving into the .NET Framework and finding it highly engaging. I have experience in Front-End development using React.js and Mobile Development with React Native. You can explore some of my projects below</p>

                <div className={style.ContentButtonMain}>
                    <button>Download CV</button>
                </div>

            </div>

            <div className={style.MainBodyContent_right}>
                <img className={style.ImgSummary} src={img} alt="Imagem de Perfil" />
            </div>
        </section>
    )
}