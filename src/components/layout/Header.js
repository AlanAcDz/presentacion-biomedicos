import { useState } from 'react';
import Menu from './Menu';
import QrModal from './QrModal';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const handleMenuClick = () => setShowMenu(!showMenu);
    const handleModalClick = () => setShowModal(!showModal);
    return (
        <header className="navbar is-dark">
            <button className={ `navbar-burger ${showMenu ? 'is-active' : ''}` }
                onClick={ handleMenuClick }>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
            <button className="button is-dark" onClick={ handleModalClick }>
                <span className="icon">
                    <i className="fas fa-qrcode"></i>
                </span>
            </button>
            { showMenu && <Menu setShowMenu={ setShowMenu } /> }
            <QrModal showModal={ showModal } setShowModal={ setShowModal } />
        </header>
    )
}

export default Header;
