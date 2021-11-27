import "./MenteeFinance.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, FinanceCard } from "../../components/";
import { slide as Menu } from "react-burger-menu";
function MenteeFinance() {
  return (
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <ProfileMenuCard />
            </Menu>
          </div>
          <span className="heading">Mentör’lere ödemiş olduğun tutar</span>
          <span className="totalmoney">
            1520 <span className="tl">₺</span>
          </span>
          <div className="list">
            <FinanceCard value="Mentör" />
            <FinanceCard value="Mentör" />
            <FinanceCard value="Mentör" />
            <FinanceCard value="Mentör" />
            <FinanceCard value="Mentör" />
            <FinanceCard value="Mentör" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenteeFinance;
