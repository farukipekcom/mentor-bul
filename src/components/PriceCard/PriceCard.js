import "./PriceCard.scss";

import { Link } from "react-router-dom";
function PriceCard({ min_price, max_price, slug }) {
  return (
    <div className="priceCard">
      <span className="priceCard-heading">Teklifler</span>
      <span className="priceCard-price">
        <span className="priceCard-price-mobiletext">Teklif Aralığı</span>{" "}
        <span>
          {min_price} - {max_price}
          <span className="tl">₺</span>
        </span>
      </span>
      <Link
        className="priceCard-button"
        to={{
          pathname: "/offer/" + slug,
          search: "1",
          hash: "#open",
        }}
      >
        Teklif Ver
      </Link>
    </div>
  );
}

export default PriceCard;
