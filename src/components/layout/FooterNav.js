import NextBtn from '../buttons/NextBtn';
import PreviousBtn from '../buttons/PreviousBtn';

const FooterNav = ({ next, previous }) => {
    return (
        <footer className="footer">
            <div className="buttons">
                { previous && <PreviousBtn route={ previous } /> }
                { next && <NextBtn route={ next } /> }
            </div>
        </footer>
    )
}

export default FooterNav;
