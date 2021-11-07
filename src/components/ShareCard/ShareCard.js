import { Facebook, Twitter, Linkedin, Url } from "../../icons";
import "./ShareCard.scss";
function ShareCard() {
  return (
    <div className="shareCard">
      <span className="shareCard-text">Paylaş</span>
      <div className="shareCard-list">
        <div className="shareCard-list-item">
          <Facebook />
        </div>
        <div className="shareCard-list-item">
          <Twitter />
        </div>
        <div className="shareCard-list-item">
          <Linkedin />
        </div>
        <div className="shareCard-list-item">
          <Url />
        </div>
      </div>
    </div>
  );
}

export default ShareCard;
