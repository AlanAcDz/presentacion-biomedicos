import ColumnCard from '../../cards/ColumnCard';
import FooterNav from '../../layout/FooterNav';

const ExampleBreakdown = () => {
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Ejemplo Práctico: MitHealth</h1>
                <h2 className="subtitle has-text-centered">¿En qué consiste?</h2>
                <div className="columns">
                    <div className="column is-two-thirds is-flex is-align-items-center">
                        <div className="content">
                            <p>La plataforma de expediente clínico electrónico para médicos y pacientes</p>
                            <ul>
                                <li>Control de citas</li>
                                <li>Biblioteca de medicamentos personal para médicos</li>
                                <li>Administración de pacientes</li>
                                <li>Control de tratamientos e historía clínica</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column logo-column">
                        <figure className="image">
                            <img src="/assets/images/mithealth/logo.png" alt="MitHealth" />
                        </figure>
                    </div>
                </div>
                <div className="columns">
                    <ColumnCard title="Aplicación de servidor"
                        image="https://images.unsplash.com/photo-1586772002345-339f8042a777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80" />
                    <ColumnCard title="Aplicación web"
                        image="./assets/images/mithealth/mithealth (8).png" />
                    <ColumnCard title="Aplicación móvil"
                        image="./assets/images/mithealth/mithealth (11).png" />
                </div>
            </section>
            <FooterNav previous="/" next="/example/prototype" />
        </>
    )
}

export default ExampleBreakdown;
