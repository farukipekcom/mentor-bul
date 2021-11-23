import "./Order.scss";

import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  OrderProcess,
} from "../../components";
function Order() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <span className="heading">Sipariş Özeti</span>
          <OrderStatusCard />
          <OrderDetails />

          <span className="orderProcessHeading">Sipariş Süreci</span>
          <OrderProcess type="3" />
          <OrderProcess type="2" />
          <OrderProcess type="1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Order;
