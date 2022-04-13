import React from "react";
import { Star } from "../../icons";
import "./ProjectSquareCardProfile.scss";
function ProjectSquareCardProfile({ item, user }) {
  return (
    <a href={`../project/${item.slug}`}>
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
            src={user.profilePhoto}
            alt=""
            className="projectSquareCard-profile-photo"
          />
          <div className="projectSquareCard-profile-details">
            <div className="projectSquareCard-profile-details-username">
              {user.username}
            </div>
            <div className="projectSquareCard-profile-details-ratings">
              <Star />
              <span className="projectSquareCard-profile-details-ratings-count">
                4.82 (5 değerlendirme)
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectSquareCardProfile;
