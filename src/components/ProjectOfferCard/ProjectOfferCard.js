import "./ProjectOfferCard.scss";
import { ArrowRight } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function ProjectOfferCard({ value, item }) {
  return (
    <a href={`project/${item.project.slug}`} className="projectSummaryCards">
      <div className="projectSummaryCards-top">
        <div className="projectSummaryCards-top-left">
          <div className="projectSummaryCards-top-left-project">
            <span className="projectSummaryCards-top-left-project-heading">
              Proje Adı:
            </span>
            <span className="projectSummaryCards-top-left-project-title">
              {item.project.title}
            </span>
          </div>
        </div>
        <div className="projectSummaryCards-top-date">
          <div className="projectSummaryCards-top-info orderdate">
            <span className="projectSummaryCards-top-info-title">
              Teklif Tarihi
            </span>
            <span className="projectSummaryCards-top-info-text">
              <Moment format="DD MMMM YYYY" locale="tr">
                {item.date}
              </Moment>
            </span>
          </div>
        </div>
        <div className="projectSummaryCards-top-price">{item.price} TL</div>
        <div className="projectSummaryCards-top-arrow">
          <ArrowRight />
        </div>
      </div>
      <div className="projectSummaryCards-bottom">
        <div className="projectSummaryCards-bottom-profile">
          <img
            src={item.user.profilePhoto}
            alt=""
            className="projectSummaryCards-bottom-profile-photo"
          />
          <div className="projectSummaryCards-bottom-profile-info info">
            <span className="projectSummaryCards-bottom-profile-info-title">
              {value}
            </span>
            <span className="projectSummaryCards-bottom-profile-info-text">
              {item.user.username}
            </span>
          </div>
        </div>
        <div className="projectSummaryCards-bottom-statusv2">
          {item.selected === true ? (
            <div className="projectSummaryCards-bottom-statusv2-green">
              Tamamlandı!
            </div>
          ) : (
            <div className="projectSummaryCards-bottom-statusv2-orange">
              Teklif verildi!
            </div>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProjectOfferCard;
