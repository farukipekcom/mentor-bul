import "./FilterCard.scss";
import { Star } from "../../icons";
import { useState } from "react";
function FilterCard() {
  const [type, setType] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setType(e.target.value);
    console.log("SSSS", e.target.value);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const loginFormData = new FormData();
  //   axios
  //     .post("https://localhost:5001/api/Offers")
  //     .then((response) => {
  //       basarili();
  //     })
  //     .catch(function (error) {
  //       hatali();
  //     });
  // };
  return (
    <div className="filterCard">
      <h3 className="filterCard-heading">Filtrele</h3>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Hizmet Türü</div>
        <form action="" className="hizmetturu">
          <label className="custom_checkbox">
            Görüntülü Görüşme
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            Yazılı Sohbet
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            Dosya Teslimi
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </form>
      </div>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Fiyat Aralığı</div>
        <div className="filterCard-filteritem-price">
          <div className="filterCard-filteritem-price-item">
            <span>Min. Fiyat</span>
            <input type="text" placeholder="150 ₺" />
          </div>
          <div className="filterCard-filteritem-price-item">
            <span>Max. Fiyat</span>
            <input type="text" placeholder="350 ₺" />
          </div>
        </div>
      </div>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Teklif Süresi</div>
        <form action="" className="hizmetturu" onSubmit={handleChange}>
          <label className="radiobutton">
            {/* 24 saat içinde */}
            Görüntülü Görüşme
            <input
              type="radio"
              name="radio"
              value="Görüntülü Görüşme"
              checked={type === "Görüntülü Görüşme"}
              onChange={handleChange}
            />
            <span className="checkmarkradio"></span>
          </label>
          <label className="radiobutton">
            {/* 3 gün içinde */}
            Yazılı Sohbet
            <input
              type="radio"
              name="radio"
              value="Yazılı Sohbet"
              checked={type === "Yazılı Sohbet"}
              onChange={handleChange}
            />
            <span className="checkmarkradio"></span>
          </label>
          <label className="radiobutton">
            {/* 7 gün içinde */}
            Dosya Teslimi
            <input
              type="radio"
              name="radio"
              value="Dosya Teslimi"
              checked={type === "Dosya Teslimi"}
              onChange={handleChange}
            />
            <span className="checkmarkradio"></span>
          </label>
          <button type="submit">FILTRELE BUNU</button>
        </form>
      </div>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Kullanıcı Puanı</div>
        <form action="" className="hizmetturu">
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">4 puan ve üzeri</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">3 puan ve üzeri</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">2 puan ve üzeri</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">1 puan ve üzeri</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <label className="custom_checkbox nopoint">
            <Star />
            <span className="checkbox-text">Puansız</span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </form>
      </div>
      <div className="filterCard-button">Filtrele</div>
    </div>
  );
}

export default FilterCard;
