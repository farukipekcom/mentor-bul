import "./OrderBought.scss";
import { Header, Category, Footer } from "../components";
import {
  ProfileMenuCard,
  OrderStatusCard,
  OrderDetails,
  PaymentForm,
  CommentCardOrder,
  CommentCardForm,
} from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function OrderBought() {
  const success = () =>
    toast.success("Başarıyla Güncellendi!", {
      position: "bottom-center",
    });
  let { slug } = useParams();
  const [order, setOrder] = useState();
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [comment, setComment] = useState();
  useEffect(() => {
    const fetchOrder = async () => {
      const result = await axios(
        `https://localhost:5001/api/Orders/GetOrderDetails/${slug}`
      );
      setOrder(result.data);
      setProject(result.data.project);
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
  }, [isLoading, order.projectId, slug]);
  useEffect(() => {}, []);
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
          {isLoading && order.status === 0 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                Sipariş başarıyla oluşturuldu.
                <b> {order.offer.user.username}</b> tarafından onay bekleniyor!
              </div>
            </div>
          )}
          {isLoading && order.status === 1 && (
            <>
              <div className="orderStatusStage">
                <div className="orderStatusStage-heading">Sipariş Durumu</div>
                <div className="orderStatusStage-text">
                  <b>{order.offer.user.username}</b> hazır! <br />
                  Şimdi ödemeyi yapıp süreci başlat.
                </div>
              </div>
              <PaymentForm
                updatedData={updatedData}
                price={order.offer.price}
                id={order.orderId}
                updatePost={updatePost}
              />
            </>
          )}
          {isLoading && order.status === 2 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                <b>{order.offer.user.username}</b> şu an proje üzerinde
                çalışıyor!
              </div>
            </div>
          )}
          {isLoading && order.status === 3 && (
            <div className="orderStatusStage">
              <div className="orderStatusStage-heading">Sipariş Durumu</div>
              <div className="orderStatusStage-text">
                Teslim edilen projeyi kontrol et ve her şey güzelse onayla!
              </div>
              <div className="orderStatusStage-container">
                <button
                  id="4"
                  onClick={updatePost}
                  className="orderStatusStage-confirmation"
                >
                  Onayla
                </button>
                <button
                  id="10"
                  onClick={updatePost}
                  className="orderStatusStage-revision"
                >
                  Revize iste
                </button>
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
                owner_id={order.offer.userId}
              />
            )}
          {isLoading &&
            isLoading2 &&
            (comment[0]?.userId || comment[1]?.userId) && (
              <CommentCardOrder
                user_id={order.offer.user.userId}
                username={order.offer.user.username}
              />
            )}
          {isLoading && (
            <OrderDetails
              project={project}
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

export default OrderBought;
