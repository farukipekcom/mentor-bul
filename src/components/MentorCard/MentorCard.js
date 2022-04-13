import "./MentorCard.scss";
import { Star } from "../../icons";
import { Rating } from "react-simple-star-rating";
function MentorCard({ item }) {
  var totalQuality =
    item.commentOwners &&
    item.commentOwners.reduce(function (accumulator, item) {
      return accumulator + item.commentRate;
    }, 0);
  var son =
    item.commentOwners &&
    Math.round((totalQuality / item.commentOwners.length) * 2) / 2;
  return (
    <a href={`profile/${item.username}`}>
      <img src={item.profilePhoto} alt="" className="mentorCard-photo" />
      <span className="mentorCard-username">{item.username}</span>
      <span className="mentorCard-location">
        {item.city}, {item.country}
      </span>
      <div className="mentorCard-rating">
        <div className="mentorCard-rating-star">
          <Rating
            size={5}
            transition
            allowHalfIcon
            fullIcon={<Star />}
            emptyIcon={<Star />}
            style={{ marginRight: "4px" }}
            initialValue={isNaN(son) ? 0 : son}
            readonly={true}
          />
        </div>
        <div className="mentorCard-rating-count">
          ({item.commentOwners.length} değerlendirme)
        </div>
      </div>
    </a>
  );
}

export default MentorCard;
