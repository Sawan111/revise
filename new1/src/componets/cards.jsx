
import profile from "../assets/profile.jpg";
const handleClick = () => {
    alert("Image clicked!");
  };
function Card(){
    return(
         
        <div className="car">
            <div className="cont">
                <p>Sawan</p>
            <img className="imag" src={profile} alt="profile" onClick={handleClick} ></img>
            </div>
        </div>
    );

}

export default Card;