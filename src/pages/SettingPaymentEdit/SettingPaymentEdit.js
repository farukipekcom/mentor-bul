import "./SettingPaymentEdit.scss";
import { Header, Category, Footer } from "../components";
import { SettingsMenuCard, SettingsPaymentEditCard } from "../../components";
function SettingPaymentEdit() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <SettingsMenuCard />
        </div>
        <div className="content">
          <div className="title">Ödeme Bilgileri - Düzenle</div>
          <SettingsPaymentEditCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SettingPaymentEdit;
