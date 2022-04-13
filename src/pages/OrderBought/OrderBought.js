import "./OrderBought.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  OrderProcess,
  Reviewed,
  PaymentForm,
  CommentCardOrder,
  CommentCardForm,
} from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function OrderBought() {
  let { slug } = useParams();
  const [order, setOrder] = useState();
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [asama2, setAsama2] = useState(0);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Orders/GetOrderDetails/${slug}`
      );
      setOrder(result.data);
      setProject(result.data.project);
      console.log("TAMAMI", result.data);
      setIsLoading(true);
      setAsama2(1);
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
  // --------------------------------------------------------------------------------------------------------------------------------------------
  const [siparis, setSiparis] = useState();
  const [yorum, setYorum] = useState();
  const [yukleniyor, setYukleniyor] = useState(false);
  const [yukleniyorr, setYukleniyorr] = useState(false);
  useEffect(() => {}, []);
  console.log("ETIKET", yukleniyor && siparis);
  var yeni = yukleniyor && siparis;
  function updatePost(e) {
    yeni.status = e.target.id;
    console.log("YENI", yeni);
    console.log("BASILDI");
    axios.put("https://localhost:5001/api/Orders/1", yeni).then((response) => {
      console.log(response.status);
    });
  }
  yukleniyorr && console.log(yorum);
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
          {/* ---------------- */}
          {isLoading && order.status === 0 ? (
            <>
              <h3>
                siparis basariyla olusturuldu. farukipekcoma haber verildi.
                hazir oldugunda odeme adimina gececeksin
              </h3>
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 1 ? (
            <>
              <h3>faruk hazir. odemeyi yapip sureci baslat.</h3>
              <PaymentForm updatePost={updatePost} />
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 2 ? (
            <>
              <h3>
                calisma suresi basladi, artik calisiyorum. burada bitirdim
                butonu olacak.
              </h3>
              <button id="3" onClick={updatePost}>
                teslim et
              </button>
            </>
          ) : (
            ""
          )}
          {isLoading && order.status === 3 ? (
            <>
              <h3>is tamamlandi. simdi kontrol ediyorum.</h3>
              <button id="4" onClick={updatePost}>
                guzel olmus. onayladim.
              </button>
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
                owner_id={order.offer.userId}
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
                user_id={order.offer.user.userId}
                username={order.offer.user.username}
              />
            </>
          ) : (
            ""
          )}
          {/* ---------------- */}
          {isLoading && order.status === 15 ? (
            <OrderDetails
              project={project}
              order={order}
              price={order.price}
              orderDate={order.createdAt}
            />
          ) : (
            ""
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

export default OrderBought;
