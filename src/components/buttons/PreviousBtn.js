import { Link } from 'react-router-dom';

const PreviousBtn = ({ route }) => {
    return (
        <Link to={ route } className="button is-dark">
            <span className="icon">
                <i className="fas fa-chevron-left"></i>
            </span>
            <span>Anterior</span>
        </Link>
    )
}

export default PreviousBtn;
