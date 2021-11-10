import React from "react";
import { Star } from "../../icons";
import "./ProjectSquareCard.scss";
import { profilePhoto } from "../../images";
function ProjectSquareCard() {
  return (
    <a href="/project" className="projectSquareCard">
      <div>
        <span className="projectSquareCard-subheading">Görüntülü Görüşme</span>
        <div className="projectSquareCard-heading">
          Seo Analizi Yapılacaktır
        </div>
        <p className="projectSquareCard-details">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          dolorem.
        </p>
        <div className="projectSquareCard-info">
          <div className="projectSquareCard-info-category">
            Internet Programcılığı
          </div>
          <div className="projectSquareCard-info-price">
            80 - 120 <span className="tl">₺</span>
          </div>
        </div>
        <div className="projectSquareCard-seperator"></div>
        <div className="projectSquareCard-profile">
          <img
            src={profilePhoto}
            alt=""
            className="projectSquareCard-profile-photo"
          />
          <div className="projectSquareCard-profile-details">
            <div className="projectSquareCard-profile-details-username">
              farukipekcom
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

export default ProjectSquareCard;
