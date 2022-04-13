import "./ProjectSummaryCardBought.scss";
import { ArrowRight } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function ProjectSummaryCardBought({ item, value }) {
  console.log(item);
  return (
    <a href={`/OrderBought/${item.orderId}`} className="projectSummaryCard">
      <div className="projectSummaryCard-profile">
        <img
          src={item.offer.user.profilePhoto}
          alt=""
          className="projectSummaryCard-profile-photo"
        />
        <div className="projectSummaryCard-profile-info info">
          <span className="projectSummaryCard-profile-info-title">{value}</span>
          <span className="projectSummaryCard-profile-info-text">
            {item.offer.user.username}
          </span>
        </div>
      </div>
      <div className="projectSummaryCard-date">
        <div className="projectSummaryCard-info orderdate">
          <span className="projectSummaryCard-info-title">Sipariş Tarihi</span>
          <span className="projectSummaryCard-info-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {item.offer.user.createdAt}
            </Moment>
          </span>
        </div>
        <div className="projectSummaryCard-info confirmationdate">
          <span className="projectSummaryCard-info-title">Onay Tarihi</span>
          <span className="projectSummaryCard-info-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {item.offer.user.createdAt}
            </Moment>
          </span>
        </div>
      </div>
      <div className="projectSummaryCard-status">
        {item.status === 0
          ? "Mentörden onay bekleniyor!"
          : item.status === 1
          ? "Mentör hazır. Ödeme yap!"
          : item.status === 2
          ? "Mentör proje üzerinde çalışıyor!"
          : item.status === 3
          ? "Proje teslim edildi. Onay verebilirsin!"
          : item.status === 4
          ? "Proje Tamamlandı. Yorum yapabilirsin!"
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

export default ProjectSummaryCardBought;
