import React from "react";
import { Star } from "../../icons";
import { Rating } from "react-simple-star-rating";
import "./ProjectSquareCard.scss";
function ProjectSquareCard({ item }) {
  var totalQuality =
    item.user.commentOwners &&
    item.user.commentOwners.reduce(function (accumulator, item) {
      return accumulator + item.commentRate;
    }, 0);
  var son =
    item.user.commentOwners &&
    Math.round((totalQuality / item.user.commentOwners.length) * 2) / 2;
  return (
    <a
      href={`../project/${item.slug}`}
      id={item.id}
      className="projectSquareCard"
    >
      <div className="projectSquareCard-container">
        <span className="projectSquareCard-subheading">
          {item.type === 1
            ? "Görüntülü Görüşme"
            : item.type === 2
            ? "Proje Teslim"
            : item.type === 3
            ? "Dosya Teslim"
            : ""}
        </span>
        <div className="projectSquareCard-heading">{item.title}</div>
        <p className="projectSquareCard-details">
          {item.description.substring(0, 80) + "..."}
        </p>
        <div className="projectSquareCard-info">
          <div className="projectSquareCard-info-category">
            Internet Programcılığı
          </div>
          <div className="projectSquareCard-info-price">
            {item.minPrice} - {item.maxPrice} <span className="tl">₺</span>
          </div>
        </div>
        <div className="projectSquareCard-seperator"></div>
        <div className="projectSquareCard-profile">
          <img
            src={item.user.profilePhoto}
            alt=""
            className="projectSquareCard-profile-photo"
          />
          <div className="projectSquareCard-profile-details">
            <div className="projectSquareCard-profile-details-username">
              {item.user.username}
            </div>
            <div className="projectSquareCard-profile-details-ratings">
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
              <span className="projectSquareCard-profile-details-ratings-count">
                ({item.user.commentOwners.length} değerlendirme)
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectSquareCard;
