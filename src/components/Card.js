import star from '../images/star.png'

export default function Card(props) {
    // console.log(props) // DEBBUGING

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    } else {
        badgeText = "IN PERSON"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card-img" alt="card-img" />
            <div className="card-stats">
                <img src={star} className="card-star" alt="star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray"> ({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card-title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
