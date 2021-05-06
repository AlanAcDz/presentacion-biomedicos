import { Link } from 'react-router-dom';

const NextBtn = ({ route }) => {
    return (
        <Link to={ route } className="button is-dark next-btn">
            <span>Siguiente</span>
            <span className="icon">
                <i className="fas fa-chevron-right"></i>
            </span>
        </Link>
    )
}

export default NextBtn;
