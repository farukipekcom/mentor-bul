import { ArrowTop } from "../../icons";
import "./RequestCategoryItemCard.scss";

function RequestCategoryItemCard() {
  return (
    <div className="requestCategoryItem">
      <div className="requestCategoryItem-left">
        <span className="requestCategoryItem-title">Girişimcilik</span>
        <div className="requestCategoryItem-info">
          <span className="requestCategoryItem-info-username">
            @farukipekcom
          </span>
          <span className="requestCategoryItem-info-date">24.10.2021</span>
          <span className="requestCategoryItem-info-status">
            <div>Planlandı</div>
          </span>
        </div>
      </div>
      <div className="requestCategoryItem-right">
        <div className="requestCategoryItem-right-vote">
          <div className="requestCategoryItem-right-vote-icon">
            <ArrowTop />
          </div>
          <span className="requestCategoryItem-right-vote-count">48</span>
        </div>
      </div>
    </div>
  );
}

export default RequestCategoryItemCard;
