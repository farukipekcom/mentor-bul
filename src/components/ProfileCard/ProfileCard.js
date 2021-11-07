import "./ProfileCard.scss";
import { profilePhoto } from "../../images";
import Star from "../Stars/Stars";
function ProfileCard() {
  return (
    <div className="profileCard">
      <img src={profilePhoto} alt="" className="profileCard-photo" />
      <span className="profileCard-username">farukipekcom</span>
      <span className="profileCard-location">Antalya, Türkiye</span>
      <span className="profileCard-rating">
        <Star color="currentColor" value="5" />
        <span className="profileCard-rating-count">(5)</span>
      </span>
      <div className="profileCard-button">Mesaj Gönder</div>
    </div>
  );
}

export default ProfileCard;
