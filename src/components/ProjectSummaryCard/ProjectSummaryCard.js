import "./ProjectSummaryCard.scss";
import { profilePhoto } from "../../images";
import { ArrowRight } from "../../icons";
function ProjectSummaryCard({ value }) {
  return (
    <a href="/order" className="projectSummaryCard">
      <div className="projectSummaryCard-profile">
        <img
          src={profilePhoto}
          alt=""
          className="projectSummaryCard-profile-photo"
        />
        <div className="projectSummaryCard-profile-info info">
          <span className="projectSummaryCard-profile-info-title">{value}</span>
          <span className="projectSummaryCard-profile-info-text">
            webhizmetleri
          </span>
        </div>
      </div>
      <div className="projectSummaryCard-date">
        <div className="projectSummaryCard-info orderdate">
          <span className="projectSummaryCard-info-title">Sipariş Tarihi</span>
          <span className="projectSummaryCard-info-text">12.10.2021</span>
        </div>
        <div className="projectSummaryCard-info confirmationdate">
          <span className="projectSummaryCard-info-title">Onay Tarihi</span>
          <span className="projectSummaryCard-info-text">14.10.2021</span>
        </div>
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
