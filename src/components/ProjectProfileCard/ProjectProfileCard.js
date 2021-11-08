import "./ProjectProfileCard.scss";
import { profilePhoto } from "../../images";
import { Time, RatingHeart, Location } from "../../icons";
import Star from "../Stars/Stars";
function ProjectProfileCard() {
  return (
    <div className="projectProfileCard">
      <img src={profilePhoto} alt="" className="projectProfileCard-photo" />
      <span className="projectProfileCard-username">farukipekcom</span>
      <span className="projectProfileCard-location">İstanbul, Türkiye</span>
      <div className="projectProfileCard-buttons">
        <div className="projectProfileCard-buttons-message">Mesaj Gönder</div>
        <div className="projectProfileCard-buttons-profile">Profil</div>
      </div>

      <div className="projectProfileCard-summary">
        <div className="projectProfileCard-summary-item">
          <div className="projectProfileCard-summary-item-icon">
            <Location />
          </div>
          <div className="projectProfileCard-summary-item-details">Türkiye</div>
        </div>
        <div className="projectProfileCard-summary-item item-rating">
          <div className="projectProfileCard-summary-item-icon">
            <RatingHeart />
          </div>
          <div className="projectProfileCard-summary-item-details">
            <Star value="5" color="#E77C40" />
            <span className="count">(8 değerlendirme)</span>
          </div>
        </div>
        <div className="projectProfileCard-summary-item">
          <div className="projectProfileCard-summary-item-icon">
            <Time />
          </div>
          <div className="projectProfileCard-summary-item-details">
            3 Ekim 2019'dan beri üye
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProfileCard;
