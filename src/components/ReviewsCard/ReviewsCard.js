import "./ReviewsCard.scss";
import { user1, user2, user3 } from "../../images";
import { Reliability, Communication, Timing } from "../../icons";
import Star from "../Stars/Stars";
function ReviewsCard() {
  return (
    <div className="reviewsCard">
      <h3 className="reviewsCard-heading">
        farukipekcom hakkında değerlendirmeler
      </h3>
      <div className="reviewsCard-summary">
        <div className="reviewsCard-summary-boxes">
          <div className="reviewsCard-summary-boxes-box">
            <div className="reviewsCard-summary-boxes-box-icon">
              <Reliability />
            </div>
            <span className="reviewsCard-summary-boxes-box-title">
              Güvenilirlik
            </span>
            <div className="reviewsCard-summary-boxes-box-rating">
              <Star color="#666" value="5" />
            </div>
          </div>
          <div className="reviewsCard-summary-boxes-box">
            <div className="reviewsCard-summary-boxes-box-icon">
              <Timing />
            </div>
            <span className="reviewsCard-summary-boxes-box-title">
              Zamanlama
            </span>
            <div className="reviewsCard-summary-boxes-box-rating">
              <Star color="#666" value="4" />
            </div>
          </div>
          <div className="reviewsCard-summary-boxes-box">
            <div className="reviewsCard-summary-boxes-box-icon">
              <Communication />
            </div>
            <span className="reviewsCard-summary-boxes-box-title">
              İletişim
            </span>
            <div className="reviewsCard-summary-boxes-box-rating">
              <Star color="#666" value="5" />
            </div>
          </div>
          <div className="reviewsCard-summary-boxes-box">
            <span className="reviewsCard-summary-boxes-box-text">
              Toplam <br />
              <span>3 değerlendirme</span>
            </span>
            <span className="reviewsCard-summary-boxes-box-sum">4.75</span>
          </div>
        </div>
      </div>
      <div className="reviewsCard-list">
        <div className="reviewsCard-list-item">
          <div className="reviewsCard-list-item-left">
            <img src={user1} alt="" />
            <div className="reviewsCard-list-item-left-profile">
              <div className="reviewsCard-list-item-left-profile-name">
                Ayşenur Gölemez
              </div>
              <div className="reviewsCard-list-item-left-profile-location">
                İzmir, Türkiye
              </div>
            </div>
          </div>
          <div className="reviewsCard-list-item-right">
            <div className="reviewsCard-list-item-right-info">
              <Star value="5" color="#E77C40" />
              <span className="reviewsCard-list-item-right-info-date">
                9 gün önce
              </span>
            </div>
            <div className="reviewsCard-list-item-right-text">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
              olarak kullanılmıştır.
            </div>
            <div className="reviewsCard-list-item-right-category">
              E-Ticaret
            </div>
          </div>
        </div>
        <div className="reviewsCard-list-item">
          <div className="reviewsCard-list-item-left">
            <img src={user2} alt="" />
            <div className="reviewsCard-list-item-left-profile">
              <div className="reviewsCard-list-item-left-profile-name">
                Mehmet Sari
              </div>
              <div className="reviewsCard-list-item-left-profile-location">
                Muğla, Türkiye
              </div>
            </div>
          </div>
          <div className="reviewsCard-list-item-right">
            <div className="reviewsCard-list-item-right-info">
              <Star value="5" color="#E77C40" />
              <span className="reviewsCard-list-item-right-info-date">
                17 gün önce
              </span>
            </div>
            <div className="reviewsCard-list-item-right-text">
              Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda
              pek değişmeden elektronik dizgiye de sıçramıştır.
            </div>
            <div className="reviewsCard-list-item-right-category">
              Mobil Uygulama
            </div>
          </div>
        </div>
        <div className="reviewsCard-list-item">
          <div className="reviewsCard-list-item-left">
            <img src={user3} alt="" />
            <div className="reviewsCard-list-item-left-profile">
              <div className="reviewsCard-list-item-left-profile-name">
                Zeynep Kaya
              </div>
              <div className="reviewsCard-list-item-left-profile-location">
                Ankara, Türkiye
              </div>
            </div>
          </div>
          <div className="reviewsCard-list-item-right">
            <div className="reviewsCard-list-item-right-info">
              <Star value="5" color="#E77C40" />
              <span className="reviewsCard-list-item-right-info-date">
                25 gün önce
              </span>
            </div>
            <div className="reviewsCard-list-item-right-text">
              1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
              yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
              sürümleri içeren masaüstü yayıncılık yazılımları ile popüler
              olmuştur.
            </div>
            <div className="reviewsCard-list-item-right-category">
              Wordpress
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCard;
