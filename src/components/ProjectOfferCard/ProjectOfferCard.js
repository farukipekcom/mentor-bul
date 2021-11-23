import "./ProjectOfferCard.scss";
import { profilePhoto } from "../../images";
import { ArrowRight } from "../../icons";
function ProjectOfferCard({ value }) {
  return (
    <a href="/" className="ProjectOfferCard">
      <img src={profilePhoto} alt="" className="ProjectOfferCard-photo" />
      <div className="ProjectOfferCard-info info">
        <span className="ProjectOfferCard-info-title">{value}</span>
        <span className="ProjectOfferCard-info-text">grafikerdunyasi</span>
      </div>
      <div className="ProjectOfferCard-info orderdate">
        <span className="ProjectOfferCard-info-title">Teklif Tarihi</span>
        <span className="ProjectOfferCard-info-text">12.10.2021</span>
      </div>
      <div className="ProjectOfferCard-info confirmationdate">
        <span className="ProjectOfferCard-info-title">İlan Bitiş Süresi</span>
        <span className="ProjectOfferCard-info-text">14.10.2021</span>
      </div>
      <div className="ProjectOfferCard-status">Bekliyor</div>
      <div className="ProjectOfferCard-price">150 TL</div>
      <div className="ProjectOfferCard-arrow">
        <ArrowRight />
      </div>
    </a>
  );
}

export default ProjectOfferCard;
