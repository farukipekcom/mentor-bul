import { profilePhoto } from "../../images";
import "./WelcomeCard.scss";

function WelcomeCard() {
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="welcomeCard">
      <img src={loggedIn.profilePhoto} alt="" className="welcomeCard-photo" />
      <div className="welcomeCard-details">
        <span className="welcomeCard-details-text">Hoşgeldin,</span>
        <span className="welcomeCard-details-username">
          @{loggedIn.username}
        </span>
      </div>
    </div>
  );
}

export default WelcomeCard;
