import "./ProjectSummaryCard.scss";
import { ArrowRight } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function ProjectSummaryCard({ item, value }) {
  console.log(item);
  return (
    <a href={`/OrderSell/${item.orderId}`} className="projectSummaryCard">
      <div className="projectSummaryCard-profile">
        <img
          src={item.project.user.profilePhoto}
          alt=""
          className="projectSummaryCard-profile-photo"
        />
        <div className="projectSummaryCard-profile-info info">
          <span className="projectSummaryCard-profile-info-title">{value}</span>
          <span className="projectSummaryCard-profile-info-text">
            {item.project.user.username}
          </span>
        </div>
      </div>
      <div className="projectSummaryCard-date">
        <div className="projectSummaryCard-info orderdate">
          <span className="projectSummaryCard-info-title">Sipariş Tarihi</span>
          <span className="projectSummaryCard-info-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {item.project.user.createdAt}
            </Moment>
          </span>
        </div>
        <div className="projectSummaryCard-info confirmationdate">
          <span className="projectSummaryCard-info-title">Onay Tarihi</span>
          <span className="projectSummaryCard-info-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {item.project.user.createdAt}
            </Moment>
          </span>
        </div>
      </div>
      <div className="projectSummaryCard-status">
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
      <div className="projectSummaryCard-price">{item.price} TL</div>
      <div className="projectSummaryCard-arrow">
        <ArrowRight />
      </div>
    </a>
  );
}

export default ProjectSummaryCard;
