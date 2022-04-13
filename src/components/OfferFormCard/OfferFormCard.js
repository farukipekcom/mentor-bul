import { FormInputTextareaCard, FormInputTextCard } from "..";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./OfferFormCard.scss";
import moment from "moment";
function OfferFormCard({ projectId, userId, minPrice, maxPrice, slug }) {
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  const basarili = () =>
    toast.success("Başarıyla Eklendi!", {
      position: "bottom-center",
    });
  const hatali = () =>
    toast.error("Hata Oluştu!", {
      position: "bottom-center",
    });
  const [formValue, setformValue] = useState({
    details: "",
    price: "",
    projectId: projectId,
    userId: loggedIn.userId,
    selected: false,
    date: moment().format("yyyy-MM-DDTHH:mm").toString(),
  });
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginFormData = new FormData();
    loginFormData.append("details", formValue.details);
    loginFormData.append("price", formValue.price);
    axios
      .post("https://localhost:5001/api/Offers", formValue)
      .then((response) => {
        basarili();
        temizle();
        setTimeout(function () {
          window.location.reload();
        }, 1000);
        window.history.pushState(
          {},
          undefined,
          `http://localhost:3000/offer/${slug}`
        );
      })
      .catch(function (error) {
        hatali();
      });
  };
  const temizle = () => {
    setformValue({
      details: "",
      price: "",
      projectId: projectId,
      userId: userId,
      selected: false,
    });
  };

  return (
    <div className="offerForm">
      <span className="offerForm-heading">Yeni Teklif Gönderin</span>
      <form className="offerForm-input" onSubmit={handleSubmit}>
        <FormInputTextareaCard
          placeholder="Teklifle ilgili açıklamanızı giriniz..."
          name="details"
          value={formValue.details}
          onChange={handleChange}
        />
        <div className="offerForm-input-price">
          <FormInputTextCard
            type="number"
            placeholder="Fiyat giriniz"
            name="price"
            value={formValue.price}
            onChange={handleChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            classSinif="appearance"
          />
          <span className="price-range">
            <span className="text">Girebileceğiniz fiyat aralığı:</span>
            <span className="price">
              {minPrice} - {maxPrice}
            </span>
          </span>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default OfferFormCard;
