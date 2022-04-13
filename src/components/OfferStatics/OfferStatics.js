import "./OfferStatics.scss";
function OfferStatics({ length, averageBid }) {
  return (
    <div className="offerStatics">
      <div className="offerStatics-item">
        <span className="offerStatics-item-title">Teklif Sayısı</span>
        <span className="offerStatics-item-desc">{length}</span>
      </div>
      <div className="offerStatics-item">
        <span className="offerStatics-item-title">Ortalama Teklif Fiyatı</span>
        <span className="offerStatics-item-desc">
          {Number(averageBid.toFixed(2))} <span className="tl">₺</span>
        </span>
      </div>
    </div>
  );
}

export default OfferStatics;
