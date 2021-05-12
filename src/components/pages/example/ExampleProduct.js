import FooterNav from '../../layout/FooterNav';
import ImageCard from '../../cards/ImageCard';

const ExampleProduct = () => {
    const images = Array(11).fill(0);
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Ejemplo Práctico: MitHealth</h1>
                <h2 className="subtitle has-text-centered">MVP</h2>
                <p className="has-text-centered mb-4">
                    <a href="https://mithealth.app" target="blank" className="button is-text">mithealth.app</a>
                </p>
                <div className="masonry-columns">
                    {
                        images.map(
                            (_, idx) => <ImageCard key={idx} name={`mithealth (${idx + 1}).png`} folder="mithealth" />
                        )
                    }
                </div>
            </section>
            <FooterNav previous="/example/prototype" next="/technologies" />
        </>
    )
}

export default ExampleProduct;
