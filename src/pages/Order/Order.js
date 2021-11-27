import "./Order.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  OrderProcess,
  Reviewed,
} from "../../components";
import { slide as Menu } from "react-burger-menu";
function Order() {
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
          <div className="send-message">Mesaj Gönder</div>
          <span className="heading">Sipariş Özeti</span>
          <OrderStatusCard />
          <OrderDetails />
          <Reviewed />
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
