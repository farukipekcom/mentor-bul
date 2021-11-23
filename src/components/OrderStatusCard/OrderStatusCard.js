import "./OrderStatusCard.scss";
function OrderStatusCard() {
  return (
    <>
      <div className="orderStatus">
        <div className="orderStatus-left">
          <span className="orderStatus-left-heading">Sipariş Durumu</span>
          <span className="orderStatus-left-text">
            Siparişiniz başarıyla tamamlandı!
          </span>
        </div>
        <div className="orderStatus-right">
          <span className="orderStatus-right-title">Teslim tarihi</span>
          <span className="orderStatus-right-text">18.11.2021</span>
        </div>
      </div>
    </>
  );
}

export default OrderStatusCard;
