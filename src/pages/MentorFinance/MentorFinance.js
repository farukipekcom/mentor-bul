import "./MentorFinance.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, FinanceCard } from "../../components";
function MentorFinance() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">
            Mentee’lere vermiş olduğun hizmetlerden kazanç
          </span>
          <span className="totalmoney">
            2570 <span className="tl">₺</span>
          </span>
          <FinanceCard value="Mentee" />
          <FinanceCard value="Mentee" />
          <FinanceCard value="Mentee" />
          <FinanceCard value="Mentee" />
          <FinanceCard value="Mentee" />
          <FinanceCard value="Mentee" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MentorFinance;
