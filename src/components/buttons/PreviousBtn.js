import { Link, useHistory } from 'react-router-dom';
import { useEventListener } from '../../hooks/useEventListener';

const PreviousBtn = ({ route }) => {
    const history = useHistory();
    const onLeftArrow = ({ key }) => {
        key === 'ArrowLeft' && history.goBack();
    }
    useEventListener('keyup', onLeftArrow);
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
