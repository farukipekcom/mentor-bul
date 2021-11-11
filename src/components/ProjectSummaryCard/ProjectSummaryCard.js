import "./ProjectSummaryCard.scss";
import { profilePhoto } from "../../images";
import { ArrowRight } from "../../icons";
function ProjectSummaryCard({ value }) {
  return (
    <a href="" className="projectSummaryCard">
      <img src={profilePhoto} alt="" className="projectSummaryCard-photo" />
      <div className="projectSummaryCard-info info">
        <span className="title">{value}</span>
        <span className="text">webhizmetleri</span>
      </div>
      <div className="projectSummaryCard-info orderdate">
        <span className="title">Sipariş Tarihi</span>
        <span className="text">12.10.2021</span>
      </div>
      <div className="projectSummaryCard-info confirmationdate">
        <span className="title">Onay Tarihi</span>
        <span className="text">14.10.2021</span>
      </div>
      <div className="projectSummaryCard-status">Tamamlandı</div>
      <div className="projectSummaryCard-price">150 TL</div>
      <div className="projectSummaryCard-arrow">
        <ArrowRight />
      </div>
      <div className="projectSummaryCard-ratingcontrol">
        Değerlendirme yapılmamış!
      </div>
    </a>
  );
}

export default ProjectSummaryCard;
