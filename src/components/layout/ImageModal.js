
const ImageModal = ({ name, folder, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    return (
        <div className={`modal ${ showModal ? 'is-active' : '' }`}>
            <div className="modal-background" onClick={ handleClose }></div>
            <div className="modal-content">
                <figure className="image">
                    <img src={`/assets/images/${folder}/${name}`} alt={ name } />
                </figure>
            </div>
            <button className="modal-close is-large" onClick={ handleClose } aria-label="close"></button>
        </div>
    )
}

export default ImageModal
