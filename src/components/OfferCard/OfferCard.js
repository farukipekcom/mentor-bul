import "./OfferCard.scss";
import { Star } from "../../icons";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { TickEmpty } from "../../icons";
import { useState } from "react";
import moment from "moment";
function Offer({ project, item, user_id, selected = true }) {
  const success = () =>
    toast.success("Başarıyla Seçildi!", {
      position: "bottom-center",
    });
  const err = () =>
    toast.error("Teklif Seçerken Hata Oluştu!", {
      position: "bottom-center",
    });
  const [formValue, setformValue] = useState({
    projectId: item.projectId,
    offerId: item.offerId,
    price: item.price,
    status: 0,
    createdAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
    updatedAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
  });
  const updatePost = async (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:5001/api/Orders", formValue)
      .then((response) => {
        setTimeout(function () {
          window.location.reload();
        }, 500);
      });
    axios
      .get(`https://localhost:5001/api/Offers/GetOfferDetails/${e.target.id}`)
      .then((response) => {
        var tempOffer = response.data;
        var tempProject = project;
        tempProject.status = false;
        tempOffer.selected = true;
        axios.put(
          `https://localhost:5001/api/Offers/${e.target.id}`,
          tempOffer
        );
        axios.put(
          `https://localhost:5001/api/Projects/${response.data.projectId}`,
          tempProject
        );
        success();
      })
      .catch(function (error) {
        err();
      });
  };
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {!selected === true ? (
        <>
          <div className="selectedOffer">SEÇİLDİ!</div>
          <div style={{ opacity: ".5" }}>
            <div className="offer-header">
              <img
                src={item.user.profilePhoto}
                alt=""
                className="offer-header-photo"
              />
              <div className="offer-header-profile">
                <span className="offer-header-profile-username">
                  {item.user.username}
                </span>
                <div className="offer-header-profile-rating">
                  <Star /> 4.82 <span>(12 değerlendirme)</span>
                </div>
              </div>
              <div className="offer-header-price">
                {item.price} <span className="tl">₺</span>
              </div>
            </div>
            <div className="offer-detail">{item.details}</div>
            {selected && user_id === loggedIn.userId ? (
              <div
                onClick={updatePost}
                id={item.offerId}
                className="offerConfirmation"
              >
                <TickEmpty /> Teklifi Onayla
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="offer-header">
            <img
              src={item.user.profilePhoto}
              alt=""
              className="offer-header-photo"
            />
            <div className="offer-header-profile">
              <span className="offer-header-profile-username">
                {item.user.username}
              </span>
              <div className="offer-header-profile-rating">
                <Star /> 4.82 <span>(12 değerlendirme)</span>
              </div>
            </div>
            <div className="offer-header-price">
              {item.price} <span className="tl">₺</span>
            </div>
          </div>
          <div className="offer-detail">{item.details}</div>
          {selected && user_id === loggedIn.userId ? (
            <div
              onClick={updatePost}
              id={item.offerId}
              className="offerConfirmation"
            >
              <TickEmpty /> Teklifi Onayla
            </div>
          ) : (
            <></>
          )}
        </>
      )}
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
    </>
  );
}

export default Offer;
