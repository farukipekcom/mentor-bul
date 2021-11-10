import "./MenteeFinance.scss";
import { Header, Category, Footer } from "../../pages/components";
import { ProfileMenuCard, FinanceCard } from "../../components/";
function MenteeFinance() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">Mentör’lere ödemiş olduğun tutar</span>
          <span className="totalmoney">
            1520 <span className="tl">₺</span>
          </span>
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
          <FinanceCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenteeFinance;
