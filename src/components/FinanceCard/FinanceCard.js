import "./FinanceCard.scss";

import { profilePhoto } from "../../images";
import { ArrowRight } from "../../icons";
function FinanceCard({ value }) {
  return (
    <a href="/" className="financeCard">
      <img src={profilePhoto} alt="" className="financeCard-photo" />
      <div className="financeCard-info financeusername">
        <span className="financeCard-info-title">{value}</span>
        <span className="financeCard-info-text">webhizmetleri</span>
      </div>
      <div className="financeCard-info financetitle">
        <span className="financeCard-info-title">Başlık</span>
        <span className="financeCard-info-text">
          Seo Hizmetleri Hakkında Detaylı Bilgi
        </span>
      </div>
      <div className="financeCard-price">
        150 <span className="tl">₺</span>
      </div>
      <div className="financeCard-arrow">
        <ArrowRight />
      </div>
    </a>
  );
}

export default FinanceCard;
