import { ArrowTop } from "../../icons";
import "./RequestCategoryItemCard.scss";
import Moment from "react-moment";
import "moment/locale/tr";
function RequestCategoryItemCard({ item }) {
  return (
    <>
      <div className="requestCategoryItem-left">
        <span className="requestCategoryItem-title">{item.name}</span>
        <div className="requestCategoryItem-info">
          <span className="requestCategoryItem-info-username">
            @farukipekcom
          </span>
          <span className="requestCategoryItem-info-date">
            <Moment format="DD MMMM YYYY HH:mm" locale="tr">
              {item.createdAt}
            </Moment>
          </span>
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
    </>
  );
}

export default RequestCategoryItemCard;
