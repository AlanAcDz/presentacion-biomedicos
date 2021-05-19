import { useQRCode } from '../../hooks/useQRCode';

const QrModal = ({ showModal, setShowModal }) => {
    const [ qrcode ] = useQRCode('https://alanacdz.github.io/presentacion-biomedicos/');
    const handleClose = () => setShowModal(false);
    return (
        <div className={`modal ${ showModal ? 'is-active' : '' }`}>
            <div className="modal-background" onClick={ handleClose }></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">¡Si, esto es un sitio web!</p>
                    <button className="delete" aria-label="close" onClick={ handleClose }></button>
                </header>
                <section className="modal-card-body">
                    <figure className="image qrcode">
                        <img src={qrcode} alt="Dirección del sitio" />
                    </figure>
                </section>
            </div>
        </div>
    )
}

export default QrModal;
