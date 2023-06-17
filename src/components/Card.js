import star from '../images/star.png'

export default function Card(props) {
    return (

        <div className="card">
            <img src={props.img} className="card--img" alt="card-img" />
            <div className="card--stats">
                <img src={star} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray"> ({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}