import ColumnCard from '../../cards/ColumnCard';
import FooterNav from '../../layout/FooterNav';

const TechnologiesDatabase = () => {
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Tecnologías usadas</h1>
                <h2 className="subtitle has-text-centered">Base de datos</h2>
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter">
                        <figure className="image">
                            <img src="https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-mongodb/contentbuilder/virtual_logo_light.svg" alt="MongoDB" />
                        </figure>
                    </div>
                </div>
                <div className="columns">
                    <ColumnCard title="Base de datos NoSQL" image="https://webassets.mongodb.com/_com_assets/cms/1-lwnlfl1ryn.png" imgSize="is-square" />
                    <ColumnCard title="Servicio en la nube" image="https://webassets.mongodb.com/_com_assets/cms/globe@2x-kgv9ll4o7r-havl08h54l.png" imgSize="is-square" />
                    <ColumnCard title="Escala de manera horizontal" image="https://www.webairy.com/wp-content/uploads/2019/07/hvsv.jpg" imgSize="is-5by3" />
                </div>
            </section>
            <FooterNav previous="/technologies/challenge" next="/technologies/web" />
        </>
    )
}

export default TechnologiesDatabase;
