import "./FilterCard.scss";
import { Star } from "../../icons";
function FilterCard() {
  return (
    <div className="filterCard">
      <h3 className="filterCard-heading">Filtrele</h3>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Hizmet Türü</div>
        <form action="" class="hizmetturu">
          <label className="custom_checkbox">
            Görüntülü Görüşme
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            Yazılı Sohbet
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            Dosya Teslimi
            <input type="checkbox" />
            <span class="checkmark"></span>
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
        <form action="" class="hizmetturu">
          <label class="radiobutton">
            24 saat içinde
            <input type="radio" name="radio" />
            <span class="checkmarkradio"></span>
          </label>
          <label class="radiobutton">
            3 gün içinde
            <input type="radio" name="radio" />
            <span class="checkmarkradio"></span>
          </label>
          <label class="radiobutton">
            7 gün içinde
            <input type="radio" name="radio" />
            <span class="checkmarkradio"></span>
          </label>
        </form>
      </div>
      <div className="filterCard-filteritem">
        <div className="filterCard-filteritem-heading">Kullanıcı Puanı</div>
        <form action="" class="hizmetturu">
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">4 puan ve üzeri</span>
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">3 puan ve üzeri</span>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">2 puan ve üzeri</span>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox">
            <Star />
            <span className="checkbox-text">1 puan ve üzeri</span>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label className="custom_checkbox nopoint">
            <Star />
            <span className="checkbox-text">Puansız</span>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </form>
      </div>
      <div className="filterCard-button">Filtrele</div>
    </div>
  );
}

export default FilterCard;
