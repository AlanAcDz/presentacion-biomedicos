
const ColumnCard = ({ image, title, size, imgSize }) => {
    return (
        <div className={`column is-flex ${size ? size : ''}`}>
            <div className="card">
                <div className="card-image">
                    <figure className={`image ${imgSize ? imgSize : 'is-4by3'}`}>
                        <img src={ image } alt={ title } />
                    </figure>
                </div>
                <div className="card-content">
                    <h4 className="subtitle">{ title }</h4>
                </div>
            </div>
        </div>
    )
}

export default ColumnCard;
