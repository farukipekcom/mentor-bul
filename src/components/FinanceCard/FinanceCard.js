import "./FinanceCard.scss";

import { profilePhoto } from "../../images";
import { ArrowRight } from "../../icons";
function FinanceCard({ value }) {
  return (
    <a href="" className="financeCard">
      <img src={profilePhoto} alt="" className="financeCard-photo" />
      <div className="financeCard-info financeusername">
        <span className="title">{value}</span>
        <span className="text">webhizmetleri</span>
      </div>
      <div className="financeCard-info financetitle">
        <span className="title">Başlık</span>
        <span className="text">Seo Hizmetleri Hakkında Detaylı Bilgi</span>
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
