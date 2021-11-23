import "./OrderDetails.scss";
import { user1 } from "../../images";
function OrderDetails() {
  return (
    <div className="orderDetails">
      <span className="orderDetails-subtitle">İş Detayı</span>
      <div className="orderDetails-heading">
        <span className="orderDetails-heading-title">
          Seo Analizi Yaptırılacaktır
        </span>
        <span className="orderDetails-heading-price">
          100 <span className="tl">₺</span>
        </span>
      </div>
      <div className="orderDetails-summary">
        <div className="orderDetails-profile">
          <img src={user1} alt="" className="orderDetails-profile-photo" />
          <div className="orderDetails-profile-details">
            <span className="orderDetails-profile-details-job">
              Frontend developer
            </span>
            <span className="orderDetails-profile-details-username">
              grafikerlerdunyasi
            </span>
          </div>
        </div>
        <div className="orderDetails-orderDate">
          <span className="orderDetails-orderDate-heading">Sipariş Tarihi</span>
          <span className="orderDetails-orderDate-date">12.11.2021 22:36</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
