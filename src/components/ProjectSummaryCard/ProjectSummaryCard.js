import "./ProjectSummaryCard.scss";
import { ArrowRight } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function ProjectSummaryCard({ item, value }) {
  return (
    <a href={`/OrderSell/${item.orderId}`} className="projectSummaryCards">
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
              Sipariş Tarihi
            </span>
            <span className="projectSummaryCards-top-info-text">
              <Moment format="DD MMMM YYYY" locale="tr">
                {item.project.user.createdAt}
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
            src={item.project.user.profilePhoto}
            alt=""
            className="projectSummaryCards-bottom-profile-photo"
          />
          <div className="projectSummaryCards-bottom-profile-info info">
            <span className="projectSummaryCards-bottom-profile-info-title">
              {value}
            </span>
            <span className="projectSummaryCards-bottom-profile-info-text">
              {item.project.user.username}
            </span>
          </div>
        </div>
        <div className="projectSummaryCards-bottom-status">
          {item.status === 0
            ? "Teklifin kabul edildi. Hazırsan onayla!"
            : item.status === 1
            ? "Ödeme bekleniyor!"
            : item.status === 2
            ? "Proje süreci başladı!"
            : item.status === 3
            ? "Mentee'den onay bekleniyor!"
            : item.status === 4
            ? "İş Tamamlandı. Yorum yapabilirsin!"
            : item.status === 5
            ? "Tamamlandı"
            : ""}
        </div>
      </div>
    </a>
  );
}

export default ProjectSummaryCard;
