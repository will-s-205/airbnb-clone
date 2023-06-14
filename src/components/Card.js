import katie_zaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card() {
    return (
        <card className="card--section">
            <img src={katie_zaferes} className="card-img" alt="card-img" />
            {/* <img src={star} className="card--star" alt="star" /> */}
            <div className="card--stats">
                <img src={star} className="card--star" alt="star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="highlight">From $136</span> / person</p>
        </card>
    )
}