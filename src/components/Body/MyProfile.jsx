import style from '../style/MyProfile.module.css';
import projects from '../../data/projects.json';


export default function MyProfile() {
    const datas = projects.projects;

    return (
        <section className={style.BodyProjects} id="projetos">
            <h2 style={{ display: 'block', marginLeft: 10 }}>TOP PROJETOS</h2>

            <div>
                {datas.map((data,index) => (
                    <div key={index} className={style.ProjectsBlocks}>
                        {/* Tags e Ícones */}
                        <div className={style.BoxTags}>
                            <div className={style.BoxTagOne}> <span className={style.TagProject}>{data.stack}</span></div>

                            <div className={style.BoxIcon}>
                                {data.icons.map((icon, idx) => (
                                    <img
                                        className={style.IconProject}
                                        key={idx}
                                        src={icon.icon}
                                        alt={`${data.image}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Informações */}
                        <div className={style.Info}>
                            <div>
                                <img
                                    src={data.image}
                                    alt={`Imagem do projeto ${data.stack}`}
                                    className={style.ProjectImage}
                                />
                            </div>
                            <div className={style.InfoDescription}>
                                <p>{data.description}<br></br><br></br><br></br>
                                </p>
                                    {data.link && (
                                        <button className={style.ProjectLink} onClick={() => window.open(data.link, "_blank")}> Ver Projeto</button>
                                    )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
                {/* <Link to={""}></Link> */}
        </section>
    );
}
