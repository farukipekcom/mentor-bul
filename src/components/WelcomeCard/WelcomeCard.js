import { profilePhoto } from "../../images";
import "./WelcomeCard.scss";

function WelcomeCard() {
  return (
    <div className="welcomeCard">
      <img src={profilePhoto} alt="" className="welcomeCard-photo" />
      <div className="welcomeCard-details">
        <span className="welcomeCard-details-text">Hoşgeldin,</span>
        <span className="welcomeCard-details-username">@farukipekcom</span>
      </div>
    </div>
  );
}

export default WelcomeCard;
