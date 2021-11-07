import "./VerificationCard.scss";
import {
  TickEmpty,
  Person,
  Payment,
  Phone,
  FacebookFilled,
  Email,
} from "../../icons";
function VerificationCard() {
  return (
    <div className="verificationCard">
      <h3 className="verificationCard-heading">Doğrulama</h3>
      <div className="verificationCard-list">
        <div className="verificationCard-list-item">
          <Person />
          <div className="verificationCard-list-item-title">
            Kimlik Doğrulama
          </div>
          <div className="verificationCard-list-item-control">
            <TickEmpty />
          </div>
        </div>
        <div className="verificationCard-list-item">
          <Payment />
          <div className="verificationCard-list-item-title">
            Ödeme Doğrulama
          </div>
          <div className="verificationCard-list-item-control">
            <TickEmpty />
          </div>
        </div>
        <div className="verificationCard-list-item">
          <Phone />
          <div className="verificationCard-list-item-title">
            Telefon Doğrulama
          </div>
          <div className="verificationCard-list-item-control">
            <TickEmpty />
          </div>
        </div>
        <div className="verificationCard-list-item">
          <Email />
          <div className="verificationCard-list-item-title">
            E-posta Doğrulama
          </div>
          <div className="verificationCard-list-item-control">
            <TickEmpty />
          </div>
        </div>
        <div className="verificationCard-list-item">
          <FacebookFilled />
          <div className="verificationCard-list-item-title">
            Facebook Bağlantısı
          </div>
          <div className="verificationCard-list-item-control">
            <TickEmpty />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationCard;
