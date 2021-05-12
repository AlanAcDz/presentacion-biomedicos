import Icon from '../../buttons/Icon';
import FooterNav from '../../layout/FooterNav';

const TechnologiesWeb = () => {
    const serverIcons = ['fab fa-php', 'fab fa-laravel', 'fab fa-python'];
    const appIcons = ['fab fa-java', 'fab fa-swift'];
    const webIcons = ['fab fa-wordpress'];
    const desktopIcons = ['fab fa-java', 'fab fa-python'];
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Tecnologías usadas</h1>
                <h2 className="subtitle has-text-centered">Tecnologías Web</h2>
                <h3 className="subtitle has-text-centered">Antes</h3>
                <div className="columns has-text-centered is-mobile">
                    <div className="column">
                        <p className="heading">Servidor</p>
                        { serverIcons.map((icon, idx) => <Icon icon={`${icon} fa-2x`} size="is-large" key={idx} />) }
                    </div>
                    <div className="column">
                        <p className="heading">App móvil</p>
                        { appIcons.map((icon, idx) => <Icon icon={`${icon} fa-2x`} size="is-large" key={idx} />) }
                    </div>
                    <div className="column">
                        <p className="heading">Sitio web</p>
                        { webIcons.map((icon, idx) => <Icon icon={`${icon} fa-2x`} size="is-large" key={idx} />) }
                    </div>
                    <div className="column">
                        <p className="heading">Aplicación de escritorio</p>
                        { desktopIcons.map((icon, idx) => <Icon icon={`${icon} fa-2x`} size="is-large" key={idx} />) }
                    </div>
                </div>
                <h3 className="subtitle mt-6 has-text-centered">Ahora</h3>
                <div className="level">
                    <div className="level-item">
                        <p className="heading">Servidor</p>
                    </div>
                    <div className="level-item">
                        <p className="heading">App móvil</p>
                    </div>
                    <div className="level-item">
                        <p className="heading">Aplicación web</p>
                    </div>
                    <div className="level-item">
                        <p className="heading">Aplicación de escritorio</p>
                    </div>
                    <div className="level-item">
                        <p className="heading">Ciencia de datos</p>
                    </div>
                    <div className="level-item">
                        <p className="heading">Juegos</p>
                    </div>
                </div>
                <div className="logos">
                    <figure className="image">
                        <img src="https://lenguajecss.com/assets/logo.svg" alt="CSS" />
                    </figure>
                    <figure className="image middle-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript" />
                    </figure>
                    <figure className="image">
                        <img src="https://lenguajehtml.com/assets/logo.png" alt="HTML" />
                    </figure>
                </div>
            </section>
            <FooterNav previous="/technologies/database" next="/advantages" />
        </>
    )
}

export default TechnologiesWeb;
