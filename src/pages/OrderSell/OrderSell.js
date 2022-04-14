import "./OrderSell.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  CommentCardForm,
  CommentCardOrder,
} from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
function OrderSell() {
  const success = () =>
    toast.success("Başarıyla Güncellendi!", {
      position: "bottom-center",
    });
  let { slug } = useParams();
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [comment, setComment] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      const result = await axios(
        `https://localhost:5001/api/Orders/GetOrderDetails/${slug}`
      );
      setOrder(result.data);
      setIsLoading(true);
    };
    const fetchComments = async () => {
      const result = await axios(
        `https://localhost:5001/api/Comments/GetCommentDetails/${order.projectId}`
      );
      setComment(result.data);
      setIsLoading2(true);
    };
    fetchOrder();
    isLoading && fetchComments();
  }, [isLoading]);
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  var updatedData = isLoading && order;
  const updatePost = (e) => {
    updatedData.status = e.target.id;
    axios
      .put(`https://localhost:5001/api/Orders/${slug}`, updatedData)
      .then((response) => {
        success();
        setTimeout(function () {
          window.location.reload();
        }, 500);
      });
  };
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
          {isLoading && order.status === 0 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                <b>{order.project.user.username}</b> teklifini kabul etti. Hala
                hazırsan sen de onayla!
              </div>
              <button
                id="1"
                onClick={updatePost}
                className="orderStatusStage-confirmation"
              >
                Onayla
              </button>
            </div>
          )}
          {isLoading && order.status === 1 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                <b>{order.project.user.username}</b> tarafından ödeme
                bekleniyor!
              </div>
            </div>
          )}
          {isLoading && order.status === 2 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                Ödeme yapıldı. Şimdi sıra sende! Tamamladığında onaylamayı
                unutma!
              </div>
              <button
                id="3"
                onClick={updatePost}
                className="orderStatusStage-confirmation"
              >
                Teslim Et
              </button>
            </div>
          )}
          {isLoading && order.status === 10 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                Revize istendi. Lütfen kontrol ediniz!
              </div>
              <button
                id="3"
                onClick={updatePost}
                className="orderStatusStage-confirmation"
              >
                Tekrar Teslim Et
              </button>
            </div>
          )}
          {isLoading && order.status === 3 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                Başarıyla teslim edildi. <b>{order.project.user.username}</b>{" "}
                için onay süreci başladı!
              </div>
            </div>
          )}
          {isLoading &&
            isLoading2 &&
            order.status > 3 &&
            !(
              comment[0]?.userId === loggedIn.userId ||
              comment[1]?.userId === loggedIn.userId
            ) && (
              <CommentCardForm
                slug={slug}
                id={5}
                user_id={loggedIn.userId}
                project_id={order.project.projectId}
                owner_id={order.project.userId}
              />
            )}
          {isLoading &&
            isLoading2 &&
            (comment[0]?.userId || comment[1]?.userId) && (
              <CommentCardOrder
                user_id={order.project.userId}
                username={order.project.user.username}
              />
            )}
          {isLoading && (
            <OrderDetails
              project={order.project}
              order={order}
              price={order.price}
              orderDate={order.createdAt}
            />
          )}
        </div>
      </div>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default OrderSell;
