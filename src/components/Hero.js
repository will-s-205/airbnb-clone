import group_photo from '../images/Group 77.png'

export default function Hero() {
    return (
        <hero className="hero-section">
            <div className="card">
                <img src={group_photo} className="hero--photos" alt="group of images" />
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </hero>
    )
}