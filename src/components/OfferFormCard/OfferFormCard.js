import { FormInputTextareaCard, FormInputTextCard } from "..";
import "./OfferFormCard.scss";
function OfferFormCard() {
  return (
    <div className="offerForm">
      <span className="offerForm-heading">Yeni Teklif Gönderin</span>
      <div className="offerForm-input">
        <FormInputTextareaCard placeholder="Teklifle ilgili açıklamanızı giriniz..." />
        <div className="offerForm-input-price">
          <FormInputTextCard placeholder="Fiyat giriniz" />
          <span className="price-range">
            <span className="text">Girebileceğiniz fiyat aralığı:</span>
            <span className="price">50 - 100</span>
          </span>
        </div>
        <button>Gönder</button>
      </div>
    </div>
  );
}

export default OfferFormCard;
