import "./ProfileCard.scss";
import { Star } from "../../icons";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
function ProfileCard({
  username,
  profilePhoto,
  city,
  country,
  rate,
  count,
  loggedIn,
}) {
  return (
    <div className="profileCard">
      <img src={profilePhoto} alt="" className="profileCard-photo" />
      <span className="profileCard-username">{username}</span>
      <span className="profileCard-location">
        {city}, {country}
      </span>
      <span className="profileCard-rating">
        <Rating
          size={5}
          transition
          allowHalfIcon
          fullIcon={<Star />}
          emptyIcon={<Star />}
          style={{ marginRight: "4px" }}
          initialValue={isNaN(rate) ? 0 : rate}
          readonly={true}
        />
        <span className="profileCard-rating-count">({count})</span>
      </span>
      {loggedIn === username ? (
        ""
      ) : (
        <div className="profileCard-button">Mesaj Gönder</div>
      )}
    </div>
  );
}

export default ProfileCard;
