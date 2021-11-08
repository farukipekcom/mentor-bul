import "./OfferStatics.scss";
function OfferStatics() {
  return (
    <div className="offerStatics">
      <div className="offerStatics-item">
        <span className="offerStatics-item-title">Teklif Sayısı</span>
        <span className="offerStatics-item-desc">5</span>
      </div>
      <div className="offerStatics-item">
        <span className="offerStatics-item-title">Ortalama Teklif Fiyatı</span>
        <span className="offerStatics-item-desc">
          110 <span className="tl">₺</span>
        </span>
      </div>
    </div>
  );
}

export default OfferStatics;
