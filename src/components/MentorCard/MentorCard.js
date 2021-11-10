import "./MentorCard.scss";
import { Stars } from "../../components";
import { profilePhoto } from "../../images";

function MentorCard() {
  return (
    <a href="/profile" className="mentorCard">
      <img src={profilePhoto} alt="" className="mentorCard-photo" />
      <span className="mentorCard-username">farukipekcom</span>
      <span className="mentorCard-location">Antalya, Türkiye</span>
      <div className="mentorCard-rating">
        <div className="mentorCard-rating-star">
          <Stars value="5" color="#E77C40" />
        </div>
        <div className="mentorCard-rating-count">(5 değerlendirme)</div>
      </div>
    </a>
  );
}

export default MentorCard;
