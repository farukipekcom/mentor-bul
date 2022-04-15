import "./ProjectProfileCard.scss";
import { Time, RatingHeart, Location } from "../../icons";
import { Star } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
import { Rating } from "react-simple-star-rating";
function ProjectProfileCard({ comment, profile }) {
  var totalQuality =
    comment &&
    comment.reduce(function (accumulator, item) {
      return accumulator + item.commentRate;
    }, 0);
  var son = comment && Math.round((totalQuality / comment.length) * 2) / 2;
  return (
    <div className="projectProfileCard">
      <img
        src={profile.profilePhoto}
        alt=""
        className="projectProfileCard-photo"
      />
      <span className="projectProfileCard-username">{profile.username}</span>

      <div className="projectProfileCard-buttons">
        <div className="projectProfileCard-buttons-message">Mesaj Gönder</div>
        <a
          href={`../profile/${profile.username}`}
          className="projectProfileCard-buttons-profile"
        >
          Profil
        </a>
      </div>
      <div className="projectProfileCard-summary">
        <div className="projectProfileCard-summary-item">
          <div className="projectProfileCard-summary-item-icon">
            <Location />
          </div>
          <div className="projectProfileCard-summary-item-details">
            {profile.city}, {profile.country}
          </div>
        </div>
        <div className="projectProfileCard-summary-item item-rating">
          <div className="projectProfileCard-summary-item-icon">
            <RatingHeart />
          </div>
          <div className="projectProfileCard-summary-item-details">
            <Rating
              size={5}
              transition
              allowHalfIcon
              fullIcon={<Star />}
              emptyIcon={<Star />}
              style={{ marginRight: "4px" }}
              initialValue={son}
              readonly={true}
            />
            <span className="count">
              ({comment && comment.length} değerlendirme)
            </span>
          </div>
        </div>
        <div className="projectProfileCard-summary-item">
          <div className="projectProfileCard-summary-item-icon">
            <Time />
          </div>
          <div className="projectProfileCard-summary-item-details">
            <Moment format="DD MMMM YYYY" locale="tr">
              {profile.createdAt}
            </Moment>
            <span style={{ marginLeft: "2px" }}> tarihinden beri üye.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectProfileCard;
