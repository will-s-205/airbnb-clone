import star from '../images/star.png'

export default function Card(props) {
    // console.log(props) // DEBBUGING

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = "IN PERSON"
    }

    return (
        <div className="card">
            <a href={props.link} target='_blank' rel="noreferrer">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.coverImg} className="card-img" alt="card-img" />
                <div className="card-stats">
                    <img src={star} className="card-star" alt="star" />
                    <span>{props.stats.rating}</span>
                    <span className="gray"> ({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </a>
        </div>
    )
}
