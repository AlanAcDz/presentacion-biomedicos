import FooterNav from '../../layout/FooterNav';

const TechnologiesChallenge = () => {
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Tecnologías usadas</h1>
                <h2 className="subtitle has-text-centered">Retos creando la plataforma</h2>
            </section>
            <FooterNav previous="/example/product" next="/technologies/database" />
        </>
    )
}

export default TechnologiesChallenge;
