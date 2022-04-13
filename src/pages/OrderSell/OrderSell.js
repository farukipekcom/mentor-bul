import "./OrderSell.scss";
import { CreditCard } from "../../icons";
import { payment } from "../../images";
import { Header, Category, Footer } from "../components";
import { FormInputTextCard } from "../../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  OrderProcess,
  Reviewed,
  CommentCardForm,
  PaymentForm,
  CommentCardOrder,
} from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
function OrderSell() {
  let { slug } = useParams();
  const [order, setOrder] = useState();
  const [project, setProject] = useState();
  const [asama1, setAsama1] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Orders/GetOrderDetails/${slug}`
      );
      setOrder(result.data);
      setProject(result.data.project);
      console.log("TAMAMI", result.data);
      setIsLoading(true);
      setAsama1(1);
    };
    const fetchItemss = async () => {
      const result = await axios(
        "https://localhost:5001/api/Orders/GetOrderDetails/1"
      );
      setSiparis(result.data);
      console.log("GELEN DATA!!!!!", result.data);
      setYukleniyor(true);
    };
    const fetchItemsss = async () => {
      const result = await axios(
        "https://localhost:5001/api/Comments/GetCommentDetails/1"
      );
      setYorum(result.data);
      console.log("GELEN DATA!!!!!", result.data);
      setYukleniyorr(true);
    };
    fetchItemsss();
    fetchItemss();
    fetchItems();
  }, []);

  // --------------------------------------------------------------------------------------------------------------------------------------
  const [siparis, setSiparis] = useState();
  const [yorum, setYorum] = useState();
  const [yukleniyor, setYukleniyor] = useState(false);
  const [yukleniyorr, setYukleniyorr] = useState(false);
  console.log("ETIKET", yukleniyor && siparis);
  var yeni = yukleniyor && siparis;
  const updatePost = (e) => {
    yeni.status = e.target.id;
    console.log("YENI", yeni);
    console.log("BASILDI");
    axios.put("https://localhost:5001/api/Orders/1", yeni).then((response) => {
      console.log(response.status);
    });
  };
  // function updatePost(e) {
  //   yeni.status = e.target.id;
  //   console.log("YENI", yeni);
  //   console.log("BASILDI");
  //   axios.put("https://localhost:5001/api/Orders/1", yeni).then((response) => {
  //     console.log(response.status);
  //   });
  // }
  // yukleniyorr && console.log("YORUUUM", yorum[0].userId);
  const loggedIn = JSON.parse(localStorage.getItem("user"));
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
          {isLoading && (
            <OrderStatusCard
              status={order.status}
              updatedDate={order.updatedAt}
            />
          )}
          {/* -------------------- */}
          {isLoading && order.status === 0 ? (
            <>
              <h3>
                galipzorlu teklifini kabul etti.
                <br />
                hala hazir oldugunu belirtmek icin onayla.
              </h3>
              <button id="1" onClick={updatePost}>
                hazirim
              </button>
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 1 ? (
            <>
              <h3>artik hazirsin. galipzorlu tarafindan odeme bekleniyor</h3>
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 2 ? (
            <>
              <h3>odeme yapildi. havuzda bekliyor. simdi calisma vakti</h3>
              <button id="3" onClick={updatePost}>
                is bitti teslim et
              </button>
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 3 ? (
            <>
              <h3>isi teslim ettin. simdi galipten onay bekleniyor.</h3>
            </>
          ) : (
            ""
          )}
          {isLoading &&
          yukleniyorr &&
          !(
            yorum[0]?.userId === loggedIn.userId ||
            yorum[1]?.userId === loggedIn.userId
          ) ? (
            <>
              <h3>yorum vakti</h3>
              <CommentCardForm
                id={5}
                user_id={loggedIn.userId}
                project_id={order.project.projectId}
                owner_id={order.project.userId}
              />
            </>
          ) : (
            ""
          )}
          {isLoading &&
          yukleniyorr &&
          (yorum[0]?.userId || yorum[1]?.userId) ? (
            <>
              <CommentCardOrder
                user_id={project.userId}
                username={project.user.username}
              />
            </>
          ) : (
            ""
          )}
          {/* -------------------- */}
          {isLoading && (
            <OrderDetails
              project={project}
              order={order}
              price={order.price}
              orderDate={order.createdAt}
            />
          )}
          {/* <Reviewed /> */}
          <span className="orderProcessHeading">Sipariş Süreci</span>
          <OrderProcess type="1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSell;
