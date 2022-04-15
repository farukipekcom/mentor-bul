import "./ProjectOfferCard.scss";
import { ArrowRight } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function ProjectOfferCard({ value, item }) {
  console.log(item);
  return (
    <a href={`project/${item.project.slug}`} className="ProjectOfferCard">
      <div className="ProjectOfferCard-profile">
        <div className="ProjectOfferCard-profile-info info">
          <span className="ProjectOfferCard-profile-info-title">
            Proje Adı:
          </span>
          <span className="ProjectOfferCard-profile-info-text">
            {item.project.title}
          </span>
        </div>
      </div>
      <div className="ProjectOfferCard-date">
        <div className="ProjectOfferCard-info orderdate">
          <span className="ProjectOfferCard-info-title">Teklif Tarihi</span>
          <span className="ProjectOfferCard-info-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {item.date}
            </Moment>
          </span>
        </div>
      </div>
      {item.selected === true ? (
        <div className="ProjectOfferCard-status ProjectOfferCard-status-green">
          Tamamlandı!
        </div>
      ) : (
        <div className="ProjectOfferCard-status ProjectOfferCard-status-orange">
          Teklif verildi!
        </div>
      )}

      <div className="ProjectOfferCard-price">
        <span className="tl">₺ </span>
        {item.price}
      </div>
      <div className="ProjectOfferCard-arrow">
        <ArrowRight />
      </div>
    </a>
  );
}

export default ProjectOfferCard;
