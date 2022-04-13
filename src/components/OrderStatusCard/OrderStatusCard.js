import "./OrderStatusCard.scss";
import Moment from "react-moment";
import "moment/locale/tr";
function OrderStatusCard({ status, updatedDate }) {
  return (
    <>
      <div
        className="orderStatus"
        style={(status = 1 ? { backgroundColor: "#4226ca" } : "")}
      >
        <div className="orderStatus-left">
          <span className="orderStatus-left-heading">Sipariş Durumu</span>
          <span className="orderStatus-left-text">
            {status === 1 ? "Siparişiniz başarıyla oluşturuldu!" : ""}
          </span>
        </div>
        <div className="orderStatus-right">
          <span className="orderStatus-right-title">Son Güncelleme Tarihi</span>
          <span className="orderStatus-right-text">
            <Moment format="DD MMMM YYYY hh:mm" locale="tr">
              {updatedDate}
            </Moment>
          </span>
        </div>
      </div>
    </>
  );
}

export default OrderStatusCard;
