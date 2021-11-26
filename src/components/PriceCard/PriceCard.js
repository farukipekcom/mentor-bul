import "./PriceCard.scss";

function PriceCard() {
  return (
    <div className="priceCard">
      <span className="priceCard-heading">Teklifler</span>
      <span className="priceCard-price">
        <span className="priceCard-price-mobiletext">Teklif Aralığı</span>{" "}
        <span>
          50 - 100 <span className="tl">₺</span>
        </span>
      </span>
      <div className="priceCard-button">Teklif Ver</div>
    </div>
  );
}

export default PriceCard;
