import "./ProjectCardHorizontal.scss";
import { Star, Timev2 } from "../../icons";
import { View, Trash, Edit } from "../../icons";
function ProjectCardHorizontal({ active = 0, item }) {
  return (
    <>
      <a href={`../project/${item.slug}`} className="projectCardHorizontal">
        <span className="projectCardHorizontal-subheading">
          {item.type === 1
            ? "Görüntülü Görüşme"
            : item.type === 2
            ? "Proje Teslim"
            : item.type === 3
            ? "Dosya Teslim"
            : ""}
        </span>
        <div className="projectCardHorizontal-heading">
          <span className="projectCardHorizontal-heading-title">
            {item.title}
          </span>
          <span className="projectCardHorizontal-heading-price">
            <span className="mobileViewPrice">Teklif Aralığı: </span>
            {item.minPrice} - {item.maxPrice} <span className="tl">₺</span>
          </span>
        </div>
        <p className="projectCardHorizontal-desc">{item.description}</p>
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
            src={item.user.profilePhoto}
            alt=""
            className="projectCardHorizontal-profile-photo"
          />
          <div className="projectCardHorizontal-profile-info">
            <span className="projectCardHorizontal-profile-info-username">
              {item.user.username}
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
      </a>
    </>
  );
}

export default ProjectCardHorizontal;
