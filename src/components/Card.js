export default function Card(props) {
    return (
        <card className="card--section">
            <img src={props.img} className="card-img" alt="card-img" />
            <div className="card--stats">
                <img src={props.star} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="highlight">From ${props.price}</span> / person</p>
        </card>
    )
}