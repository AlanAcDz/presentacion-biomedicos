import { Link, useHistory } from 'react-router-dom';
import { useEventListener } from '../../hooks/useEventListener';

const NextBtn = ({ route }) => {
    const history = useHistory();
    const onRightArrow = ({ key }) => {
        key === 'ArrowRight' && history.push(route);
    }
    useEventListener('keyup', onRightArrow);
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
