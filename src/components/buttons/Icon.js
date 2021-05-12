
const Icon = ({ icon, size }) => {
    return (
        <span className={`icon ${size}`}>
            <i className={icon}></i>
        </span>
    )
}

export default Icon;
