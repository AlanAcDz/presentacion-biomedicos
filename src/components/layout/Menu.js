import { NavLink } from 'react-router-dom';

const Menu = ({ setShowMenu }) => {
    const closeMenu = () => setShowMenu(false);
    return (
        <div className="header-menu" onClick={ closeMenu }>
            <aside className="menu">
                <p className="menu-label">Introducción</p>
                <ul className="menu-list">
                    <li><NavLink to="/" exact activeClassName="is-active">¿Quién soy y qué hago?</NavLink></li>
                </ul>
                <p className="menu-label">Ejemplo Práctico: MitHealth</p>
                <ul className="menu-list">
                    <li><NavLink to="/example/breakdown" activeClassName="is-active">¿En que consiste?</NavLink></li>
                    <li><NavLink to="/example/prototype" activeClassName="is-active">Prototipo</NavLink></li>
                    <li><NavLink to="/example/product" activeClassName="is-active">MitHealth</NavLink></li>
                </ul>
                <p className="menu-label">Tecnologías usadas</p>
                <ul className="menu-list">
                    <li><NavLink to="/technologies/challenge" activeClassName="is-active">Retos creando la plataforma</NavLink></li>
                    <li><NavLink to="/technologies/database" activeClassName="is-active">Base de datos</NavLink></li>
                    <li><NavLink to="/technologies/cloud" activeClassName="is-active">Cloud</NavLink></li>
                    <li><NavLink to="/technologies/web" activeClassName="is-active">Tecnologías web</NavLink></li>
                </ul>
                <p className="menu-label">Sobre el desarrollo de software</p>
                <ul className="menu-list">
                    <li><NavLink to="/advantages" activeClassName="is-active">Ventajas</NavLink></li>
                    <li><NavLink to="/getting-started" activeClassName="is-active">¿Cómo empiezo?</NavLink></li>
                </ul>
            </aside>
        </div>
    )
}

export default Menu;
