import ColumnCard from '../cards/ColumnCard';
import FooterNav from '../layout/FooterNav';

const Advantages = () => {
    return (
        <>
            <section className="section">
                <h2 className="title has-text-centered">Ventajas sobre otros campos laborales</h2>
                <div className="columns">
                    <ColumnCard title="Remuneración económica" image="https://media.giphy.com/media/qzeCF4ymrgFXy/giphy.gif" />
                    <ColumnCard title="No necesitas título" image="https://media.giphy.com/media/xTiTne6OaK0fQAxXYk/giphy.gif" />
                </div>
                <div className="columns">
                    <ColumnCard title="Trabajo 100% remoto" image="https://media.giphy.com/media/3osBL2PuVsJT5CMXiU/giphy.gif" />
                    <ColumnCard title="Facilidad para emprender" image="https://media.giphy.com/media/l1J3BtZ57jdR6ymOs/giphy.gif" />
                </div>
            </section>
            <FooterNav previous="/technologies/web" />
        </>
    )
}

export default Advantages;
