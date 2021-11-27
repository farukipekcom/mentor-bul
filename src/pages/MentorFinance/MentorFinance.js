import "./MentorFinance.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, FinanceCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function MentorFinance() {
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
          <span className="heading">
            Mentee’lere vermiş olduğun hizmetlerden kazanç
          </span>
          <span className="totalmoney">
            2570 <span className="tl">₺</span>
          </span>
          <div className="list">
            <FinanceCard value="Mentee" />
            <FinanceCard value="Mentee" />
            <FinanceCard value="Mentee" />
            <FinanceCard value="Mentee" />
            <FinanceCard value="Mentee" />
            <FinanceCard value="Mentee" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MentorFinance;
