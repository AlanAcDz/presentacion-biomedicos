import FooterNav from '../../layout/FooterNav';
import ImageCard from '../../layout/ImageCard';

const ExamplePrototype = () => {
    const webImages = Array(5).fill(0);
    const appImages = Array(5).fill(0);
    return (
        <>
            <section className="section">
                <h1 className="title has-text-centered">Ejemplo Práctico: MitHealth</h1>
                <h2 className="subtitle has-text-centered">Prototipo</h2>
                <div className="masonry-columns">
                    {
                        webImages.map(
                            (_, idx) => <ImageCard key={idx} name={`web (${idx + 1}).png`} folder="prototype" />
                        )
                    }
                    {
                        appImages.map(
                            (_, idx) => <ImageCard key={idx} name={`app (${idx + 1}).jpg`} folder="prototype" />
                        )
                    }
                </div>
            </section>
            <FooterNav previous="/example/breakdown" next="/example/product" />
        </>
    )
}

export default ExamplePrototype;
