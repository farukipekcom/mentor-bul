import "./PriceCard.scss";

function PriceCard() {
  return (
    <div className="priceCard">
      <span className="priceCard-heading">Teklifler</span>
      <span className="priceCard-price">
        50 - 100 <span className="tl">₺</span>
      </span>
      <div className="priceCard-button">Teklif Ver</div>
    </div>
  );
}

export default PriceCard;
