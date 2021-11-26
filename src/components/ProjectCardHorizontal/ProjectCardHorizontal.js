import "./ProjectCardHorizontal.scss";
import { Star, Timev2 } from "../../icons";
import { profilePhoto } from "../../images";
import { View, Trash, Edit } from "../../icons";
import { useState } from "react";
function ProjectCardHorizontal({ active = 0 }) {
  return (
    <div className="projectCardHorizontal">
      <a href="/project">
        <span className="projectCardHorizontal-subheading">
          Görüntülü Görüşme
        </span>
        <div className="projectCardHorizontal-heading">
          <span className="projectCardHorizontal-heading-title">
            Seo Analizi Yapılacaktır
          </span>
          <span className="projectCardHorizontal-heading-price">
            <span className="mobileViewPrice">Teklif Aralığı: </span>80 - 120{" "}
            <span className="tl">₺</span>
          </span>
        </div>
        <p className="projectCardHorizontal-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          commodi, quos aut repudiandae sapiente dolor eaque officia ullam
          eligendi sit iste non eius in. Voluptas consectetur accusamus
          molestias sed officiis!
        </p>
        <div className="projectCardHorizontal-categories">
          <div className="projectCardHorizontal-categories-item">
            Adobe Photoshop
          </div>
          <div className="projectCardHorizontal-categories-item">
            Grafik Tasarım
          </div>
        </div>

        <div className="projectCardHorizontal-seperator"></div>

        <div className="projectCardHorizontal-profile">
          <img
            src={profilePhoto}
            alt=""
            className="projectCardHorizontal-profile-photo"
          />
          <div className="projectCardHorizontal-profile-info">
            <span className="projectCardHorizontal-profile-info-username">
              farukipekcom
            </span>
            <span className="projectCardHorizontal-profile-info-rating">
              <Star />
              4.82
              <span>(5 değerlendirme)</span>
            </span>
          </div>

          <div className="projectCardHorizontal-profile-time">
            <div className="projectCardHorizontal-profile-time-icon">
              <Timev2 />
            </div>
            <div className="projectCardHorizontal-profile-time-date">
              29.10.2021
            </div>
          </div>
        </div>
      </a>
      {active ? (
        <div className="actions">
          <div className="actions-icon">
            <View />
          </div>
          <div className="actions-icon">
            <Trash />
          </div>
          <div className="actions-icon">
            <Edit />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProjectCardHorizontal;
