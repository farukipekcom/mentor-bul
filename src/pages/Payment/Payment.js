import "./Payment.scss";
import { ProjectSmallCard, PaymentForm } from "../../components";
import { Header, Category, Footer } from "../../pages/components";
import CartSummary from "../../components/CartSummary/CartSummary";
function Payment() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <ProjectSmallCard />
          <PaymentForm />
        </div>
        <div className="sidebar">
          <CartSummary />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
