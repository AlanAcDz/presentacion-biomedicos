import ColumnCard from '../../cards/ColumnCard';
import FooterNav from '../../layout/FooterNav';

const TechnologiesChallenge = () => {
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Tecnologías usadas</h1>
                <h2 className="subtitle has-text-centered">Retos creando la plataforma</h2>
                <div className="columns">
                    <ColumnCard title="Crear una solución costo-efectiva" image="https://media.giphy.com/media/3orifdO6eKr9YBdOBq/giphy.gif" />
                    <ColumnCard title="Cumplimiento de la normativa" image="https://media.giphy.com/media/RDZo7znAdn2u7sAcWH/giphy.gif" />
                    <ColumnCard title="Desarrollar una plataforma fácil de mantener" image="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" />
                </div>
            </section>
            <FooterNav previous="/example/product" next="/technologies/database" />
        </>
    )
}

export default TechnologiesChallenge;
