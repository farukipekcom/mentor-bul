import "./OfferCard.scss";
import { Star } from "../../icons";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { TickEmpty } from "../../icons";
import { useState, useEffect } from "react";
function Offer({ item, user_id, sec = true }) {
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const [teklif, setTeklif] = useState();
  const [yukleniyor, setYukleniyor] = useState(false);

  const updatePost = async (e) => {
    console.log(e.target.id);
    axios
      .get(`https://localhost:5001/api/Offers/GetOfferDetails/${e.target.id}`)
      .then((response) => {
        setTeklif(response.data);
        console.log("DDDD", response.data);
        setYukleniyor(true);
        console.log("TEKLIF", response.data);
        var yeni = response.data;
        console.log("YENI", yeni);
        yeni.selected = true;
        axios
          .put(`https://localhost:5001/api/Offers/${e.target.id}`, yeni)
          .then((response) => {
            setTimeout(function () {
              window.location.reload();
            }, 1000);
            console.log(response.status);
          });
      });
  };
  console.log(item.selected === true ? console.log("bitti") : "");
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {!sec === true ? (
        <>
          <div className="faruk">SEÇİLDİ!</div>
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
            {sec && user_id === loggedIn.userId ? (
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
          {sec && user_id === loggedIn.userId ? (
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

      {/* {!sec && (
        <>
          <h2>Teklif Seçildi.</h2>
        </>
      )} */}
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
