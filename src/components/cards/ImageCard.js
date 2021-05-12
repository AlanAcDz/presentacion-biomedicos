import { useState } from 'react';
import ImageModal from '../modals/ImageModal';

const ImageCard = ({ name, folder }) => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => setShowModal(true);
    return (
        <>
            <div className="card is-clickable" onClick={ openModal }>
                <div className="card-image">
                    <figure className="image">
                        <img src={`/assets/images/${folder}/${name}`} alt={ name } />
                    </figure>
                </div>
            </div>
            { showModal && <ImageModal name={name} folder={folder} showModal={showModal} setShowModal={setShowModal} /> }
        </>
    )
}

export default ImageCard
