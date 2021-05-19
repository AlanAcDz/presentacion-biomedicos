import FooterNav from '../layout/FooterNav';

const AboutMe = () => {
    return (
        <>
            <section className="section">
                <h2 className="title has-text-centered">¿Quién soy y qué hago?</h2>
                <div className="columns">
                    <div className="column is-half content">
                        <h2 className="subtitle">¡Hola! Soy Alan Acuña</h2>
                        <ul>
                            <li>Ingeniero Biomédico egresado de la Salle, generación 2018</li>
                            <li>Me dedico al desarrollo de software, enfocado en desarrollo web</li>
                            <li>Desde que egresé he trabajado como freelance, creando sitios web para diferentes clientes y agencias, así como en diferentes proyectos personales</li>
                            <li>Mi sitio web y blog: <a className="link" href="https://devaces.com.mx" target="_blank" rel="noopener noreferrer">DevAces</a></li>
                            <li>Contacto: <a className="link" href="mailto:alan.acuna@lasallistas.org.mx">alan.acuna@lasallistas.org.mx</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <figure className="image">
                            <img src="./assets/images/about-me.jpg" alt="" />
                        </figure>
                    </div>
                </div>
            </section>
            <FooterNav next="/example/breakdown" />
        </>
    )
}

export default AboutMe;
