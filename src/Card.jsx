import profilePic from './assets/swedish.jpg'

function Card() {
    return (
        //import css use "className" not "class" because it's reseved keywork
        <div className="card">
            <img className="card-image" src={profilePic} alt="Read me if image not show" ></img>
            <h2 className="card-title">SuperFire105</h2>
            <p className="card-text">I really happy when you make friend with me</p>
        </div>

        //src="https://via.placeholder.com/150"
    );
}

export default Card