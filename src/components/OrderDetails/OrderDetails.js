import "./OrderDetails.scss";
import Moment from "react-moment";
import "moment/locale/tr";
function OrderDetails({ project, order, price, orderDate }) {
  return (
    <div className="orderDetails">
      <span className="orderDetails-subtitle">İş Detayı</span>
      <div className="orderDetails-heading">
        <span className="orderDetails-heading-title">
          <a href={`project/${project.slug}`}>{project.title}</a>
        </span>
        <span className="orderDetails-heading-price">
          {price} <span className="tl">₺</span>
        </span>
      </div>

      <div className="orderDetails-summary">
        <a href={`profile/${order.project.user.username}`}>
          <div className="orderDetails-profile">
            <img
              src={order.project.user.profilePhoto}
              alt=""
              className="orderDetails-profile-photo"
            />
            <div className="orderDetails-profile-details">
              <span className="orderDetails-profile-details-job">Mentör</span>
              <span className="orderDetails-profile-details-username">
                {order.project.user.username}
              </span>
            </div>
          </div>
        </a>
        <div className="orderDetails-orderDate">
          <span className="orderDetails-orderDate-heading">Sipariş Tarihi</span>
          <span className="orderDetails-orderDate-date">
            <Moment format="DD MMMM YYYY hh:mm" locale="tr">
              {orderDate}
            </Moment>
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
