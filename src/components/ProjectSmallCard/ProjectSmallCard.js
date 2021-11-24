import "./ProjectSmallCard.scss";
import Star from "../Stars/Stars";
import { profilePhoto } from "../../images";

function ProjectSmallCard() {
  return (
    <div className="projectSmall">
      <img src={profilePhoto} alt="" className="projectSmall-photo" />
      <div className="projectSmall-heading">
        <div className="projectSmall-heading-title">
          Seo Analizi Yaptırılacaktır
        </div>
        <div className="projectSmall-heading-star">
          <Star value="5" />{" "}
          <span className="projectSmall-heading-star-count">
            (5 değerlendirme)
          </span>
        </div>
      </div>
      <div className="projectSmall-type">Görüntülü Görüşme</div>
    </div>
  );
}

export default ProjectSmallCard;
